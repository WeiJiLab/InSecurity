package com.thoughtworks.security.insecurity.dto.response;

import com.thoughtworks.security.insecurity.dto.UserDTO;
import com.thoughtworks.security.insecurity.entity.Article;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Data
@Getter
@Setter
@Builder
public class ArticleResponseDTO {
    private String authorName;
    private Article article;
    private List<String> tags;
}
