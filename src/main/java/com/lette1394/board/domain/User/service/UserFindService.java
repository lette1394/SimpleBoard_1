package com.lette1394.board.domain.User.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

import com.lette1394.board.common.service.FindService;
import com.lette1394.board.domain.User.model.User;
import com.lette1394.board.domain.User.repository.UserRepository;

@Service
@RequiredArgsConstructor
public class UserFindService implements FindService<User> {
    private final UserRepository userRepository;

    @Override
    public Optional<User> findById(final long id) {
        return userRepository.findById(id);
    }

    @Override
    public User getOne(final long id) {
        return userRepository.getOne(id);
    }
}
