package com.example.socket.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Tender {
    // Id Auto Generate
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
    private String tenderName;
    private String startTime;
    private String endTime;
    private String isStarted;
    private String isClosed;

}
