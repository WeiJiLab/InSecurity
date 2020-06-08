package com.thoughtworks.security.insecurity.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private Long uid;
    private String username;
    private String email;
    private String token;
    private String lastLoginTime;
    private Boolean del;
}
