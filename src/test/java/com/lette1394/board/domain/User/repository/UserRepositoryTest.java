package com.lette1394.board.domain.User.repository;

import com.lette1394.board.common.Constant;
import com.lette1394.board.common.repository.MySQLContainer;
import lombok.RequiredArgsConstructor;
import org.junit.jupiter.api.Test;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ActiveProfiles;
import org.testcontainers.junit.jupiter.Testcontainers;

import static org.assertj.core.api.Assertions.assertThat;

@Rollback
@Testcontainers
@ActiveProfiles(Constant.TEST)
@RequiredArgsConstructor
@EnableConfigurationProperties
@SpringBootTest(classes = MySQLContainer.class)
class UserRepositoryTest {
    private MySQLContainer mySQLContainer;

    private UserRepository userRepository;

    @Test
    void test1() {
        System.out.println("done");
        assertThat(mySQLContainer.isRunning()).isTrue();
    }
}