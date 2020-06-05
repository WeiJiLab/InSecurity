package com.thoughtworks.security.insecurity.controller;


import com.thoughtworks.security.insecurity.dto.ResultDTO;
import com.thoughtworks.security.insecurity.dto.UserDTO;
import com.thoughtworks.security.insecurity.dto.request.PostArticleRequestDTO;
import com.thoughtworks.security.insecurity.dto.response.ArticleResponseDTO;
import com.thoughtworks.security.insecurity.entity.Article;
import com.thoughtworks.security.insecurity.service.ArticleService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/article")
public class ArticleController {

    private final ArticleService articleService;

    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }

    @PostMapping("/post")
    @CrossOrigin(origins = "*")
    public ResultDTO<Article> post(@RequestBody PostArticleRequestDTO postArticleRequestDTO) {
        return articleService.post(postArticleRequestDTO);
    }

    @GetMapping("/all")
    @CrossOrigin(origins = "*")
    public ResultDTO<List<ArticleResponseDTO>> listByCreateTime() {
        return articleService.listByCreateTime();
    }

    @GetMapping("/hot")
    @CrossOrigin(origins = "*")
    public ResultDTO<List<ArticleResponseDTO>> listHotByUpdateTime() {
        return articleService.listHotByUpdateTime();
    }

    @PutMapping("/hot/{aid}")
    @CrossOrigin(origins = "*")
    public ResultDTO<ArticleResponseDTO> hotByAid(@PathVariable("aid") Long aid, UserDTO userDTO) throws Throwable {
        return articleService.hotByAid(aid);
    }

    @DeleteMapping("/delete/{aid}")
    @CrossOrigin(origins = "*")
    public ResultDTO<ArticleResponseDTO> deleteByAid(@PathVariable("aid") Long aid, UserDTO userDTO) throws Throwable {
        return articleService.deleteByAid(aid);
    }

    @GetMapping("/topic")
    @CrossOrigin(origins = "*")
    public ResultDTO<List<ArticleResponseDTO>> listByTopic(@RequestParam("topic") String topic) {
        return articleService.listByTopic(topic);
    }

    @GetMapping("/search")
    @CrossOrigin(origins = "*")
    public ResultDTO<List<ArticleResponseDTO>> listByKey(@RequestParam("key") String key) {
        return articleService.listByKey(key);
    }

    @GetMapping("/user")
    @CrossOrigin(origins = "*")
    public ResultDTO<List<ArticleResponseDTO>> listByUid(@RequestParam("uid") Long uid) {
        return articleService.listByUid(uid);
    }

    @GetMapping("/topics")
    @CrossOrigin(origins = "*")
    public ResultDTO<List<String>> listTopics() {
        return articleService.listTopics();
    }
}
