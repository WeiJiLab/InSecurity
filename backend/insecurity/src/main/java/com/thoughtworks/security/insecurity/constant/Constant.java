package com.thoughtworks.security.insecurity.constant;

import java.util.HashMap;
import java.util.Map;

public class Constant {
    public static final String EMAIL_OR_PASSWORD_NOT_CORRECT_CODE = "EMAIL_OR_PASSWORD_NOT_CORRECT";
    public static final String REGISTER_FAILED = "REGISTER_FAILED";
    public static final String EMAIL_ALREADY_REGISTERED = "EMAIL_ALREADY_REGISTERED";
    public static final String USERNAME_ALREADY_REGISTERED = "USERNAME_ALREADY_REGISTERED";
    public static final String USER_NOT_FOUND = "USER_NOT_FOUND";
    public static final Map<String, String> ERRORS;

    static {
        Map<String, String> err = new HashMap<>();
        err.put(EMAIL_OR_PASSWORD_NOT_CORRECT_CODE, "用户名或者密码不正确");
        err.put(REGISTER_FAILED, "用户注册失败");
        err.put(EMAIL_ALREADY_REGISTERED, "该邮箱已经注册过");
        err.put(USERNAME_ALREADY_REGISTERED, "该用户名已经被别人用了");
        err.put(USER_NOT_FOUND, "该用户不存在");


        ERRORS = err;
    }
}
