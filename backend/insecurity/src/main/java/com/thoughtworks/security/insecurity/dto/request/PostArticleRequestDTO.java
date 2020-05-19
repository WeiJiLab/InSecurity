package com.thoughtworks.security.insecurity.dto.request;

import lombok.Data;
import lombok.Getter;

@Data
@Getter
public class PostArticleRequestDTO {
    private Long uid;
    private String title;
    private String tags;
    private String imgUrl;
    private String content;
}
