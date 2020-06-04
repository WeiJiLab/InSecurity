package com.thoughtworks.security.insecurity.repository;

import com.thoughtworks.security.insecurity.entity.Cookie;
import com.thoughtworks.security.insecurity.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CookieRepository extends JpaRepository<Cookie,Long> {
}

