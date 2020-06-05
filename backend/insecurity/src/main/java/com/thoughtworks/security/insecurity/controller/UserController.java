package com.thoughtworks.security.insecurity.controller;


import com.thoughtworks.security.insecurity.dto.ResultDTO;
import com.thoughtworks.security.insecurity.dto.UserDTO;
import com.thoughtworks.security.insecurity.dto.request.LoginRequestDTO;
import com.thoughtworks.security.insecurity.dto.request.RegisterRequestDTO;
import com.thoughtworks.security.insecurity.dto.response.LoginResponseDTO;
import com.thoughtworks.security.insecurity.service.UserService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    @CrossOrigin(origins = "*")
    public ResultDTO<UserDTO> register(@RequestBody RegisterRequestDTO registerRequestDTO) {
        return userService.register(registerRequestDTO);
    }

    @PutMapping("/ban/{uid}")
    @CrossOrigin(origins = "*")
    public ResultDTO<UserDTO> register(@PathVariable("uid") Long uid,@RequestBody UserDTO userDTO) throws Throwable {
        return userService.banUser(uid);
    }

    @GetMapping("/all")
    @CrossOrigin(origins = "*")
    public ResultDTO<List<UserDTO>> all() {
        return userService.all();
    }

    @PostMapping("/login")
    @CrossOrigin(origins = "*")
    public ResultDTO<LoginResponseDTO> login(@RequestBody LoginRequestDTO loginRequestDTO) {
        return userService.login(loginRequestDTO);
    }
}
