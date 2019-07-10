package com.lette1394.board.domain.User.repository;

import com.lette1394.board.common.Constant;
import com.lette1394.board.common.config.extension.TestContainerExtension;
import com.lette1394.board.domain.User.model.User;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.ActiveProfiles;

@DataJpaTest
@ActiveProfiles(Constant.TEST)
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
@ExtendWith(TestContainerExtension.class)
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