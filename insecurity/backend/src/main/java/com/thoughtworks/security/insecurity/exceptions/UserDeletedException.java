package com.thoughtworks.security.insecurity.exceptions;

public class UserDeletedException extends InSecurityException {
    public UserDeletedException(String errorCode) {
        super(errorCode);
    }

    public UserDeletedException(String errorCode, String message) {
        super(errorCode, message);
    }
}
