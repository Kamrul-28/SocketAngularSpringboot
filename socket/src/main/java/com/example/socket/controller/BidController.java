package com.example.socket.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.socket.dao.BidDao;
import com.example.socket.dto.Message;
import com.example.socket.entity.Bid;
import com.example.socket.service.AbstractCRUDLService;
import com.example.socket.service.BidService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BidController {

    public Bid newBid;
    
    @Autowired
    private BidService bidService;

    @Autowired
    private BidDao bidDao;

    @Autowired
    private AbstractCRUDLService abstractCRUDLService;

    @GetMapping({"/bid"})
    public List<Bid> allTender(){
        return bidService.fetchBidList();
    }

    @PostMapping({"/createBid"})
    public Bid createNewTender(@RequestBody Bid bid){
        newBid=bidService.createNewBid(bid);
        abstractCRUDLService.notifyFrontend();
        return newBid;
    }

    @GetMapping({"/winners"})
    public List<Bid> tenderWinners(){
        return bidService.tenderWinnersList();
    }

    @GetMapping({"/tenderWiseBids/{id}"})
    public List<Bid>  stratOctionById(@PathVariable Long id){
		return bidDao.findByTenderId(id);
    }


    // @PostMapping("/send-bid-message")
    // public void sendMessage(@RequestBody final Message message){
    //     bidService.notifyFrontend(message.getMessageContent());
    // }

}
