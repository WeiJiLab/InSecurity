package com.thoughtworks.security.insecurity.dto.request;

import lombok.Data;
import lombok.Getter;

@Data
@Getter
public class LoginRequestDTO {
    private String email;
    private String password;
}
