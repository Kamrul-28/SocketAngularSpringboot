package com.example.socket.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Bid {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
    private Long tenderId;
    private String userId;
    private String bidAmount;
    private String isWinner;
    public Bid orElseThrow(Object object) {
        return null;
    }
}
