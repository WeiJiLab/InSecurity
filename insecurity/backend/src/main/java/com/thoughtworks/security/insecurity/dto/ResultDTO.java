package com.thoughtworks.security.insecurity.dto;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
@Builder
public class ResultDTO<T> {

    private String errorCode;
    private T data;
    private String message;

    public ResultDTO(String errorCode, String message) {
        this.errorCode = errorCode;
        this.message = message;
    }

    public ResultDTO(T data) {
        this.data = data;
    }

    public ResultDTO(String errorCode, T data, String message) {
        this.errorCode = errorCode;
        this.data = data;
        this.message = message;
    }
}
