package com.thoughtworks.security.insecurity.exceptions;

public class RegisterFailedException extends InSecurityException {
    public RegisterFailedException(String errorCode) {
        super(errorCode);
    }

    public RegisterFailedException(String errorCode, String message) {
        super(errorCode, message);
    }
}
