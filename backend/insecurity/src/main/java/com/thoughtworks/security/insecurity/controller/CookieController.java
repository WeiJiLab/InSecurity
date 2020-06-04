package com.thoughtworks.security.insecurity.controller;

import com.thoughtworks.security.insecurity.entity.Cookie;
import com.thoughtworks.security.insecurity.repository.CookieRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/cookie")
public class CookieController {

    private final CookieRepository cookieRepository;

    public CookieController(CookieRepository cookieRepository) {
        this.cookieRepository = cookieRepository;
    }

    @GetMapping("/set")
    @CrossOrigin(origins = "*")
    public String set(@RequestParam("cookie") String cookie) {
        cookieRepository.save(Cookie.builder().value(cookie).build());
        return cookie;
    }

    @GetMapping("/all")
    @CrossOrigin(origins = "*")
    public List<Cookie> all() {
        return cookieRepository.findAll();
    }
}
