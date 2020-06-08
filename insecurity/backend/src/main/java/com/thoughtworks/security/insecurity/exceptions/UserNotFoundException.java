package com.thoughtworks.security.insecurity.exceptions;

public class UserNotFoundException extends InSecurityException {
    public UserNotFoundException(String errorCode) {
        super(errorCode);
    }

    public UserNotFoundException(String errorCode, String message) {
        super(errorCode, message);
    }
}
