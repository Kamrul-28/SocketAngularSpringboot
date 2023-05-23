package com.example.socket.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.socket.entity.Tender;

@Repository
public interface TenderDao extends JpaRepository<Tender,Long>{   
}
