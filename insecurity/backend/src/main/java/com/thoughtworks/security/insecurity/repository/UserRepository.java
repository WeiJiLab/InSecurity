package com.thoughtworks.security.insecurity.repository;

import com.thoughtworks.security.insecurity.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    User findTopByEmailAndPassword(String email, String password);

    User findTopByEmail(String email);

    User findTopByUsername(String username);
}

