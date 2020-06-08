package com.thoughtworks.security.insecurity.dto.request;

import lombok.Data;
import lombok.Getter;

@Data
@Getter
public class RegisterRequestDTO {
    private String username;
    private String email;
    private String password;
}
