package com.lette1394.board.domain.User.repository;

import com.lette1394.board.common.config.annotation.DataJpaEmbeddedTest;
import com.lette1394.board.common.config.annotation.NoRollback;
import com.lette1394.board.domain.User.model.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

@NoRollback
@DataJpaEmbeddedTest
class UserRepositoryTest2 {
    @Autowired
    private UserRepository userRepository;

    @Test
    void test1() {
        userRepository.save(User.builder().firstName("10").build());
        userRepository.save(User.builder().firstName("30").build());
        userRepository.save(User.builder().firstName("20").build());
        userRepository.save(User.builder().firstName("60").build());
    }

    @Test
    void test2() {
        System.out.println("bbbbbbbbbbbbbbbbbbbbbbbbbbb");
        userRepository.save(User.builder().firstName("00").build());
        userRepository.findAll().forEach(System.out::println);
        System.out.println("bbbbbbbbbbbbbbbbbbbbbbbbbbb");
    }


    @Test
    void test3() {
        System.out.println("ccccccccccccccccccccccccc");
        userRepository.save(User.builder().firstName("450").build());
        userRepository.findAll().forEach(System.out::println);
        System.out.println("ccccccccccccccccccccccccc");
    }
}
