package com.thoughtworks.security.insecurity.dto.response;

import com.thoughtworks.security.insecurity.dto.UserDTO;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
@Builder
public class LoginResponseDTO {
    private UserDTO userDTO;
}
