package com.thoughtworks.security.insecurity.exceptions;

public class UsernameAlreadyRegisteredException extends InSecurityException {
    public UsernameAlreadyRegisteredException(String errorCode) {
        super(errorCode);
    }

    public UsernameAlreadyRegisteredException(String errorCode, String message) {
        super(errorCode, message);
    }
}
