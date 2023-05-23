package com.example.socket.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.socket.dao.TenderDao;
import com.example.socket.entity.Tender;

@Service
public class TenderService {
    
    @Autowired
    private TenderDao tenderDao;

    public Tender createNewTender(Tender tender){
        return tenderDao.save(tender);
    }

    public List<Tender> fetchTenderList() {
        return (List<Tender>) tenderDao.findAll();
    }

    public List<Tender> checkDateTime() {
        return  (List<Tender>) tenderDao.findAll();
    }

}
