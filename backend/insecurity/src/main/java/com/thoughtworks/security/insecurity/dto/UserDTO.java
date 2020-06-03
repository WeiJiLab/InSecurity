package com.thoughtworks.security.insecurity.dto;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Data
@Getter
@Setter
@Builder
public class UserDTO {
    private Long uid;
    private String username;
    private String email;
    private String token;
    private String lastLoginTime;
    private Boolean del;
}
