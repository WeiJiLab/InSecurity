package com.thoughtworks.security.insecurity.exceptions;

public class EmailOrPasswordNotCorrectException extends InSecurityException {


    public EmailOrPasswordNotCorrectException(String errorCode) {
        super(errorCode);
    }

    public EmailOrPasswordNotCorrectException(String errorCode, String message) {
        super(errorCode, message);
    }
}
