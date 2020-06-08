package com.thoughtworks.security.insecurity.exceptions;

public class ArticleNotFoundException extends InSecurityException {
    public ArticleNotFoundException(String errorCode) {
        super(errorCode);
    }

    public ArticleNotFoundException(String errorCode, String message) {
        super(errorCode, message);
    }
}
