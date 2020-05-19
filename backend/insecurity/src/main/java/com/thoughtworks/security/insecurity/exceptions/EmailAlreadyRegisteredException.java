package com.thoughtworks.security.insecurity.exceptions;

public class EmailAlreadyRegisteredException extends InSecurityException {
    public EmailAlreadyRegisteredException(String errorCode) {
        super(errorCode);
    }

    public EmailAlreadyRegisteredException(String errorCode, String message) {
        super(errorCode, message);
    }
}
