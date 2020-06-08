package com.thoughtworks.security.insecurity.service;

import com.thoughtworks.security.insecurity.dto.ResultDTO;
import com.thoughtworks.security.insecurity.dto.request.PostArticleRequestDTO;
import com.thoughtworks.security.insecurity.dto.response.ArticleResponseDTO;
import com.thoughtworks.security.insecurity.entity.Article;
import com.thoughtworks.security.insecurity.exceptions.ArticleNotFoundException;
import com.thoughtworks.security.insecurity.repository.ArticleRepository;
import com.thoughtworks.security.insecurity.repository.UserRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.function.Supplier;
import java.util.stream.Collectors;

import static com.thoughtworks.security.insecurity.constant.Constant.ARTICLE_NOT_FOUND;

@Component
public class ArticleService {

    private final ArticleRepository articleRepository;
    private final UserRepository userRepository;
    private final JdbcTemplate jdbcTemplate;

    public ArticleService(ArticleRepository articleRepository, UserRepository userRepository, JdbcTemplate jdbcTemplate) {
        this.articleRepository = articleRepository;
        this.userRepository = userRepository;
        this.jdbcTemplate = jdbcTemplate;
    }


    public ResultDTO<List<ArticleResponseDTO>> listByCreateTime() {
        List<Article> allOrderByCreateTimeDesc = articleRepository.findAllByOrderByCreateTimeDesc();
        return ResultDTO.<List<ArticleResponseDTO>>builder().data(getArticleResponseDTO(allOrderByCreateTimeDesc)).build();
    }

    public ResultDTO<List<ArticleResponseDTO>> listHotByUpdateTime() {
        List<Article> allOrderByCreateTimeDesc = articleRepository.findAllByHotIsOrderByUpdateTimeDesc(true);
        return ResultDTO.<List<ArticleResponseDTO>>builder().data(getArticleResponseDTO(allOrderByCreateTimeDesc)).build();
    }

    public ResultDTO<List<ArticleResponseDTO>> listByTopic(String topic) {
        String[] topics = topic.trim().split(",");
        Set<ArticleResponseDTO> result = new HashSet<>();
        for (String tag : topics) {
            List<Article> allByTagsLike = articleRepository.findAllByTagsLike("%" + tag + "%");
            result.addAll(getArticleResponseDTO(allByTagsLike));
        }
        return ResultDTO.<List<ArticleResponseDTO>>builder().data(new ArrayList<>(result)).build();
    }

    private List<ArticleResponseDTO> getArticleResponseDTO(List<Article> allByTagsLike) {
        List<ArticleResponseDTO> articleResponseDTOS = new ArrayList<>();
        for (Article article : allByTagsLike) {

            ArticleResponseDTO articleResponseDTO = ArticleResponseDTO.builder()
                    .authorName(userRepository.findById(article.getUid()).get().getUsername())
                    .tags(Arrays.asList(article.getTags().trim().split(",")))
                    .article(article).build();

            articleResponseDTOS.add(articleResponseDTO);
        }
        return articleResponseDTOS;
    }

    public ResultDTO<List<String>> listTopics() {
        List<String> tags = articleRepository.findAll().stream().map(article -> article.getTags().trim()).collect(Collectors.toList());

        Set<String> topics = new HashSet<>();
        for (String tag : tags) {
            topics.addAll(Arrays.asList(tag.split(",")));
        }
        return ResultDTO.<List<String>>builder().data(new ArrayList<>(topics)).build();
    }

    public ResultDTO<Article> post(PostArticleRequestDTO postArticleRequestDTO) {
        Article article = Article.builder()
                .uid(postArticleRequestDTO.getUserDTO().getUid())
                .tags(postArticleRequestDTO.getTags())
                .title(postArticleRequestDTO.getTitle())
                .imgUrl(postArticleRequestDTO.getImgUrl())
                .content(postArticleRequestDTO.getContent())
                .hot(false)
                .createTime(new Date())
                .updateTime(new Date())
                .build();
        return ResultDTO.<Article>builder().data(articleRepository.save(article)).build();
    }

    public ResultDTO<List<ArticleResponseDTO>> listByKey(String key) {
        Set<ArticleResponseDTO> result = new HashSet<>();
        try {
            String sql = "select * from article where title like '%" + key + "%';";
            System.out.println(sql);
            List<Article> allByTagsLike = jdbcTemplate.query(
                    sql,
                    (rs, rowNum) -> Article.builder()
                            .aid(rs.getLong("aid"))
                            .uid(rs.getLong("uid"))
                            .title(rs.getString("title"))
                            .tags(rs.getString("tags"))
                            .imgUrl(rs.getString("img_url"))
                            .content(rs.getString("content"))
                            .createTime(rs.getTime("create_time"))
                            .hot(rs.getBoolean("hot"))
                            .build());

            result.addAll(getArticleResponseDTO(allByTagsLike));
        } catch (Exception e) {
            return ResultDTO.<List<ArticleResponseDTO>>builder().data(new ArrayList<>(result)).build();
        }
        return ResultDTO.<List<ArticleResponseDTO>>builder().data(new ArrayList<>(result)).build();
    }

    public ResultDTO<List<ArticleResponseDTO>> listByUid(Long uid) {
        Set<ArticleResponseDTO> result = new HashSet<>();

        List<Article> articles = articleRepository.findAllByUidIs(uid);
        result.addAll(getArticleResponseDTO(articles));
        return ResultDTO.<List<ArticleResponseDTO>>builder().data(new ArrayList<>(result)).build();
    }

    public ResultDTO<ArticleResponseDTO> hotByAid(Long aid) throws Throwable {
        Article article = articleRepository.findById(aid).orElseThrow((Supplier<Throwable>) () -> new ArticleNotFoundException(ARTICLE_NOT_FOUND));

        article.setHot(!article.getHot());

        articleRepository.save(article);

        ArticleResponseDTO articleResponseDTO = ArticleResponseDTO.builder()
                .authorName(userRepository.findById(article.getUid()).get().getUsername())
                .tags(Arrays.asList(article.getTags().trim().split(",")))
                .article(article).build();

        return ResultDTO.<ArticleResponseDTO>builder().data(articleResponseDTO).build();
    }

    public ResultDTO<ArticleResponseDTO> deleteByAid(Long aid) throws Throwable {
        Article article = articleRepository.findById(aid).orElseThrow((Supplier<Throwable>) () -> new ArticleNotFoundException(ARTICLE_NOT_FOUND));
        articleRepository.deleteById(aid);
        ArticleResponseDTO articleResponseDTO = ArticleResponseDTO.builder()
                .authorName(userRepository.findById(article.getUid()).get().getUsername())
                .tags(Arrays.asList(article.getTags().trim().split(",")))
                .article(article).build();
        return ResultDTO.<ArticleResponseDTO>builder().data(articleResponseDTO).build();
    }
}
