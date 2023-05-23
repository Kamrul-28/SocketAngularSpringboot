package com.example.socket.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.socket.dao.UserDao;
import com.example.socket.entity.User;

@Service
public class UserService {

    @Autowired
    private UserDao userDao;

    public User createNewUser(User user){
        //Create New User
        User newUser = new User();
        newUser.setUserName(user.getUserName());
        newUser.setUserEmail(user.getUserEmail());
        newUser.setUserPassword(user.getUserPassword());
        newUser.setUserRole(user.getUserRole());
        return userDao.save(newUser);
    }

    public List<User> fetchUserList() {
        return (List<User>) userDao.findAll();
    }

    public User authenticate(User user) {
        User data = userDao.findByUserEmail(user.getUserEmail());
        if(data.getUserPassword().equals(user.getUserPassword()))
        {
            data.setToken("loggedIn");
            userDao.save(data);
            return data;
        }
        return data;
        
    }

}
