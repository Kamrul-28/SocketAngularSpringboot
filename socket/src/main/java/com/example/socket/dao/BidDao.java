package com.example.socket.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.socket.entity.Bid;

@Repository
public interface BidDao extends JpaRepository<Bid,Long>{
    Object findByTenderIdAndAmount = null;

    List<Bid> findByTenderId(Long id);

    List<Bid> findByisWinner(String string);

}
