package com.example.socket.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.socket.entity.Role;

@Repository
public interface RoleDao extends JpaRepository<Role,Long>{

}