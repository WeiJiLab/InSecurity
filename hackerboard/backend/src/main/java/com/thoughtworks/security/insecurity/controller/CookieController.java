package com.thoughtworks.security.insecurity.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/cookie")
public class CookieController {

    private final List<String> cookies = new ArrayList<>();

    @GetMapping("/set")
    @CrossOrigin(origins = "*")
    public String set(@RequestParam("cookie") String cookie) {
        cookies.add(cookie);
        return cookie;
    }

    @GetMapping("/all")
    @CrossOrigin(origins = "*")
    public List<String> all() {
        return cookies;
    }

    @GetMapping("/clear")
    @CrossOrigin(origins = "*")
    public List<String> clear() {
        cookies.clear();
        return cookies;
    }
}
