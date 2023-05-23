package com.example.socket.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.socket.dao.BidDao;
import com.example.socket.dto.ResponseMessage;

import org.springframework.messaging.simp.SimpMessagingTemplate;
import com.example.socket.entity.Bid;

@Service
public class BidService extends AbstractCRUDLService{
    @Autowired
    private BidDao bidDao;

    // private final SimpMessagingTemplate messagingTemplate;
    // private final NotificationService notificationService;


    // @Autowired
    // public BidService(SimpMessagingTemplate messagingTemplate, NotificationService notificationService) {
    //     this.messagingTemplate = messagingTemplate;
    //     this.notificationService = notificationService;
    // }

    // public void notifyFrontend(final String message) {
    //     ResponseMessage response = new ResponseMessage(message);
    //     notificationService.sendGlobalNotification();

    //     messagingTemplate.convertAndSend("/topic/messages", response);
    // }

    public Bid createNewBid(Bid bid){
        return bidDao.save(bid);
    }

    public List<Bid> fetchBidList() {
        return (List<Bid>) bidDao.findAll();
    }

    public List<Bid> tenderWinnersList() {
        return  (List<Bid>) bidDao.findByisWinner("1");
    }

    public List<Bid> tenderWiseWinner() {
        return  (List<Bid>) bidDao.findByisWinner("1");
    }

    @Override
    protected String getEntityTopic() {
        return "bid";
    }
}
