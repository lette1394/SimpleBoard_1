package com.lette1394.board.domain.Account.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lette1394.board.domain.Account.model.Account;

public interface AccountRepository extends JpaRepository<Account, Long> {
}
