package com.lette1394.board.domain.User.repository;

import com.lette1394.board.common.config.annotation.DataJpaEmbeddedTest;
import com.lette1394.board.common.config.dummy.DummyUser;
import com.lette1394.board.domain.User.model.User;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.annotation.Rollback;
import org.testcontainers.containers.GenericContainer;

import javax.annotation.Resource;

@Rollback(false)
@DataJpaEmbeddedTest
@ExtendWith(DummyUser.class)
class UserRepositoryTest {

    @Resource
    private GenericContainer container;

    @Autowired
    private UserRepository userRepository;

    @Test
    void test123() {
        System.out.println(container.isRunning());

        userRepository.save(User.builder().firstName("1").build());
        userRepository.save(User.builder().firstName("3").build());
        userRepository.save(User.builder().firstName("2").build());
        userRepository.save(User.builder().firstName("6").build());
    }

    @Test
    void test2() {
        System.out.println("bbbbbbbbbbbbbbbbbbbbbbbbbbb");
        userRepository.flush();
        userRepository.save(User.builder().firstName("0").build());
        userRepository.findAll().forEach(System.out::println);
        System.out.println("bbbbbbbbbbbbbbbbbbbbbbbbbbb");
    }


    @Test
    void test3() {
        System.out.println("ccccccccccccccccccccccccc");
        userRepository.flush();
        userRepository.save(User.builder().firstName("45").build());
        userRepository.findAll().forEach(System.out::println);
        System.out.println("ccccccccccccccccccccccccc");
    }
}