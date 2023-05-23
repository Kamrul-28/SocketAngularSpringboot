package com.example.socket.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.socket.entity.User;
import com.example.socket.service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {

    @Autowired
    private UserService userService;


    @GetMapping({"/user"})
    public List<User> allTender(){
        return userService.fetchUserList();
    }

    @PostMapping({"/createNewUser"})
    public User createNewUser(@RequestBody User user){
        return userService.createNewUser(user);
    }

    @PostMapping({"/authenticate"})
    public User authenticate(@RequestBody User user){
        return userService.authenticate(user);
    }


}
