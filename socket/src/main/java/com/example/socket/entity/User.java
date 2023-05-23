package com.example.socket.entity;

import lombok.Data;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
@Data
public class User {

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
    private String userName;
    private String userEmail;
    private String userPassword;
    private String userRole;
    private String token;
}
