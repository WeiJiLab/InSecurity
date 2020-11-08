package com.thoughtworks.security.insecurity.constant;

import java.util.HashMap;
import java.util.Map;

public class Constant {
    public static final String EMAIL_OR_PASSWORD_NOT_CORRECT_CODE = "EMAIL_OR_PASSWORD_NOT_CORRECT";
    public static final String REGISTER_FAILED = "REGISTER_FAILED";
    public static final String EMAIL_ALREADY_REGISTERED = "EMAIL_ALREADY_REGISTERED";
    public static final String USERNAME_ALREADY_REGISTERED = "USERNAME_ALREADY_REGISTERED";
    public static final String USER_NOT_FOUND = "USER_NOT_FOUND";
    public static final String USER_HAS_DELETED = "USER_HAS_DELETED";
    public static final String ARTICLE_NOT_FOUND = "ARTICLE_NOT_FOUND";


    public static final Map<String, String> ERRORS;

    static {
        Map<String, String> err = new HashMap<>();
        err.put(EMAIL_OR_PASSWORD_NOT_CORRECT_CODE, "Username or Password is incorrect");
        err.put(REGISTER_FAILED, "Registration has failed");
        err.put(EMAIL_ALREADY_REGISTERED, "This email has been used");
        err.put(USERNAME_ALREADY_REGISTERED, "This username has been used");
        err.put(USER_NOT_FOUND, "No such user");
        err.put(USER_HAS_DELETED, "The user is not allowed");
        err.put(ARTICLE_NOT_FOUND, "This article does not exist");

        ERRORS = err;
    }
}
