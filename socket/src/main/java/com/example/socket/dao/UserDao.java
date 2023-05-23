package com.example.socket.dao;

import com.example.socket.entity.User;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends JpaRepository<User, Long> {

    User findByUserEmail(String userEmail);
}
