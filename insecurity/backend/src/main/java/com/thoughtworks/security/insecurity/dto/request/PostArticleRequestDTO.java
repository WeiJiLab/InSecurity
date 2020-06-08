package com.thoughtworks.security.insecurity.dto.request;

import com.thoughtworks.security.insecurity.dto.UserDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Data
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PostArticleRequestDTO {
    private String title;
    private String tags;
    private String imgUrl;
    private String content;
    private UserDTO userDTO;
}
