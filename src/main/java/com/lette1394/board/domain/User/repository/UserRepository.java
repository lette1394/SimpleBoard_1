package com.lette1394.board.domain.User.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lette1394.board.domain.User.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
