package com.thoughtworks.security.insecurity.service;

import com.thoughtworks.security.insecurity.dto.ResultDTO;
import com.thoughtworks.security.insecurity.dto.UserDTO;
import com.thoughtworks.security.insecurity.dto.request.LoginRequestDTO;
import com.thoughtworks.security.insecurity.dto.request.RegisterRequestDTO;
import com.thoughtworks.security.insecurity.dto.response.LoginResponseDTO;
import com.thoughtworks.security.insecurity.entity.User;
import com.thoughtworks.security.insecurity.exceptions.EmailAlreadyRegisteredException;
import com.thoughtworks.security.insecurity.exceptions.EmailOrPasswordNotCorrectException;
import com.thoughtworks.security.insecurity.exceptions.RegisterFailedException;
import com.thoughtworks.security.insecurity.exceptions.UserNotFoundException;
import com.thoughtworks.security.insecurity.exceptions.UsernameAlreadyRegisteredException;
import com.thoughtworks.security.insecurity.repository.UserRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import static com.thoughtworks.security.insecurity.constant.Constant.EMAIL_ALREADY_REGISTERED;
import static com.thoughtworks.security.insecurity.constant.Constant.EMAIL_OR_PASSWORD_NOT_CORRECT_CODE;
import static com.thoughtworks.security.insecurity.constant.Constant.REGISTER_FAILED;
import static com.thoughtworks.security.insecurity.constant.Constant.USERNAME_ALREADY_REGISTERED;
import static com.thoughtworks.security.insecurity.constant.Constant.USER_NOT_FOUND;

@Component
public class UserService {

    private final JdbcTemplate jdbcTemplate;

    private final UserRepository userRepository;

    public UserService(JdbcTemplate jdbcTemplate, UserRepository userRepository) {
        this.jdbcTemplate = jdbcTemplate;
        this.userRepository = userRepository;
    }

    public ResultDTO<LoginResponseDTO> login(LoginRequestDTO loginRequestDTO) {

//        User user = userRepository.findTopByEmailAndPassword(loginRequestDTO.getEmail(), loginRequestDTO.getPassword());
        User user = userRepository.findTopByEmail(loginRequestDTO.getEmail());
        if (user == null) {
            throw new UserNotFoundException(USER_NOT_FOUND);
        }

//        String password = DigestUtils.md5DigestAsHex((user.getEmail() + user.getUsername() + loginRequestDTO.getPassword()).getBytes());


        // select * from user where email ='password' and password = ''or '1'='1' ;
        String sql = String.format("select * from user where email ='%s' and password = '%s';", user.getEmail(), loginRequestDTO.getPassword());
        System.out.println(sql);
        List<User> query = jdbcTemplate.query(
                sql,
                (rs, rowNum) -> User.builder()
                        .uid(rs.getLong("uid"))
                        .email(rs.getString("email"))
                        .username(rs.getString("username"))
                        .password(rs.getString("password"))
                        .token(rs.getString("token"))
                        .createTime(rs.getTime("create_time"))
                        .updateTime(rs.getTime("update_time"))
                        .lastLoginTime(rs.getTime("last_login_time"))
                        .build());

        if (!query.isEmpty()) {
            user = query.get(0);
            return ResultDTO.<LoginResponseDTO>builder()
                    .data(LoginResponseDTO.builder().userDTO(user.toUserDTO()).build())
                    .build();
        }
        throw new EmailOrPasswordNotCorrectException(EMAIL_OR_PASSWORD_NOT_CORRECT_CODE);
    }

    public ResultDTO<UserDTO> register(RegisterRequestDTO registerRequestDTO) {
        User byEmail = userRepository.findTopByEmail(registerRequestDTO.getEmail());
        if (byEmail != null) {
            throw new EmailAlreadyRegisteredException(EMAIL_ALREADY_REGISTERED);
        }

        User byUsername = userRepository.findTopByUsername(registerRequestDTO.getUsername());
        if (byUsername != null) {
            throw new UsernameAlreadyRegisteredException(USERNAME_ALREADY_REGISTERED);
        }

        // String password = DigestUtils.md5DigestAsHex((registerRequestDTO.getEmail() + registerRequestDTO.getUsername() + registerRequestDTO.getPassword()).getBytes());
        User user = User.builder()
                .username(registerRequestDTO.getUsername())
                .email(registerRequestDTO.getEmail())
                .password(registerRequestDTO.getPassword())
                .createTime(new Date())
                .updateTime(new Date())
                .lastLoginTime(new Date())
                .token(UUID.randomUUID().toString())
                .build();
        User savedUser = userRepository.save(user);
        if (savedUser.getUid() != null) {
            return ResultDTO.<UserDTO>builder()
                    .data(user.toUserDTO())
                    .build();
        }
        throw new RegisterFailedException(REGISTER_FAILED);
    }

    public ResultDTO<List<UserDTO>> all() {
        List<User> users = userRepository.findAll();
        List<UserDTO> result = new ArrayList<>();
        for (User user : users) {
            result.add(user.toUserDTO());
        }
        return ResultDTO.<List<UserDTO>>builder()
                .data(result).build();
    }
}
