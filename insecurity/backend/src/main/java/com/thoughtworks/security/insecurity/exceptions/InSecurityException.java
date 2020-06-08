package com.thoughtworks.security.insecurity.exceptions;

public class InSecurityException extends RuntimeException {

    private String errorCode;

    public String getErrorCode() {
        return errorCode;
    }

    public InSecurityException(String errorCode) {
        this.errorCode = errorCode;
    }

    public InSecurityException(String errorCode, String message) {
        super(message);
        this.errorCode = errorCode;
    }
}
