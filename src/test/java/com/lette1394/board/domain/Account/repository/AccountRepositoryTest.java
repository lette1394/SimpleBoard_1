package com.lette1394.board.domain.Account.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import lombok.RequiredArgsConstructor;

import com.lette1394.board.common.annotation.DataJpaEmbeddedTest;
import com.lette1394.board.common.annotation.NoRollback;
import com.lette1394.board.domain.Account.model.Account;
import com.lette1394.board.domain.User.model.User;

@NoRollback
@DataJpaEmbeddedTest
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
class AccountRepositoryTest {
    private final AccountRepository accountRepository;

    @Test
    void test1() {
        User user = User.builder().email("helloworld@naver.com").firstName("first name").build();
        Account account = Account.byUser()
                .user(user)
                .build();
        accountRepository.save(account);
    }

    @Test
    void test2() {
        accountRepository.findAll().forEach(System.out::println);
    }
}