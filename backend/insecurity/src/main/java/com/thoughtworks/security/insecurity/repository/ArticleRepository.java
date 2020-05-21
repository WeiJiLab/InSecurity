package com.thoughtworks.security.insecurity.repository;

import com.thoughtworks.security.insecurity.entity.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Long> {
    List<Article> findAllByOrderByCreateTimeDesc();

    List<Article> findAllByTagsLike(String tag);

    List<Article> findAllByTitleLike(String title);

    List<Article> findAllByUidIs(Long uid);

    List<Article> findAllByHotIsOrderByUpdateTimeDesc(Boolean b);
}
