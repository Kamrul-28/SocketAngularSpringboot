package com.example.socket.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.socket.dao.TenderDao;
import com.example.socket.entity.Tender;
import com.example.socket.exception.ResourceNotFoundException;
import com.example.socket.service.TenderService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TenderController {
    
    @Autowired
    private TenderService tenderService;

    @Autowired
    private TenderDao tenderDao;

    // @Autowired
    // private BidDao bidDao;

    @GetMapping({"/tender"})
    public List<Tender> allTender(){
        return tenderService.fetchTenderList();
    }

    @PostMapping({"/createNewTender"})
    public Tender createNewTender(@RequestBody Tender tender){
        return tenderService.createNewTender(tender);
    }

    @GetMapping({"/stratOction/{id}"})
    public ResponseEntity<Tender>  stratOctionById(@PathVariable Long id){
        Tender tender = tenderDao.findById(id).orElseThrow(() -> new ResourceNotFoundException("Data For Encryption not exist with id :" + id));
        tender.setIsStarted("1");
        tenderDao.save(tender);
		return ResponseEntity.ok(tender);
    }

    @GetMapping({"/closeOction/{id}"})
    public ResponseEntity<Tender>  closeOctionById(@PathVariable Long id){
        
        Tender tender = tenderDao.findById(id).orElseThrow(() -> new ResourceNotFoundException("Data For Encryption not exist with id :" + id));
        tender.setIsClosed("1");
        tenderDao.save(tender);


        // List<Bid> bid = bidDao.findByTenderId(id);
        // Bid minBid = bid
        //             .stream()
        //             .min(Comparator.comparing(Bid::getBidAmount))
        //             .orElseThrow(NoSuchElementException::new);
        
        // minBid.setIsWinner("1");
        // bidDao.save(minBid);
		return ResponseEntity.ok(tender);
    }

}
