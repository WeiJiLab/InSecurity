package com.thoughtworks.security.insecurity.entity;

import com.thoughtworks.security.insecurity.dto.UserDTO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity(name = "user")
@Data
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long uid;

    private String username;

    private String email;

    private String password;

    private String token;

    private Date createTime;
    private Date updateTime;
    private Date lastLoginTime;
    private Boolean del;

    public UserDTO toUserDTO(){
        return UserDTO.builder()
                .uid(uid)
                .username(username)
                .email(email)
                .token(token)
                .lastLoginTime(lastLoginTime.toString())
                .del(del)
                .build();
    }
}
