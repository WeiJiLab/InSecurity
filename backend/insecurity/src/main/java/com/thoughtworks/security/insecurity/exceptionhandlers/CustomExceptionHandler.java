package com.thoughtworks.security.insecurity.exceptionhandlers;

import com.mysql.cj.util.StringUtils;
import com.thoughtworks.security.insecurity.constant.Constant;
import com.thoughtworks.security.insecurity.dto.ResultDTO;
import com.thoughtworks.security.insecurity.exceptions.InSecurityException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
public class CustomExceptionHandler {


    @ResponseBody
    @ExceptionHandler(InSecurityException.class)
    public ResponseEntity LoginExceptionHandler(InSecurityException ex) {
        String message = StringUtils.isNullOrEmpty(ex.getMessage()) ? Constant.ERRORS.get(ex.getErrorCode()) : ex.getMessage();

        ResultDTO<Object> result = ResultDTO.builder().errorCode(ex.getErrorCode()).message(message).build();
        return ResponseEntity.status(500).body(result);
    }
}
