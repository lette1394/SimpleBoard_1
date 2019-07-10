package com.lette1394.board.domain.User.repository;

import com.lette1394.board.common.config.annotation.WithDockerClearAfterEachTest;
import com.lette1394.board.common.config.annotation.WithDockerMySQL;
import com.lette1394.board.domain.User.model.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

@WithDockerMySQL
class UserRepositoryTest {
    @Autowired
    private UserRepository userRepository;

    @Test
    void test1() {
        userRepository.save(User.builder().firstName("1").build());
        userRepository.save(User.builder().firstName("3").build());
        userRepository.save(User.builder().firstName("2").build());
        userRepository.save(User.builder().firstName("6").build());
    }

    @Test
    void test2() {
        System.out.println("bbbbbbbbbbbbbbbbbbbbbbbbbbb");
        userRepository.findAll().forEach(System.out::println);
        System.out.println("bbbbbbbbbbbbbbbbbbbbbbbbbbb");
    }
}