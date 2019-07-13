package com.lette1394.board.domain.Account.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import lombok.RequiredArgsConstructor;

import com.lette1394.board.common.service.FindService;
import com.lette1394.board.domain.User.model.User;

@RestController
@RequiredArgsConstructor
public class AccountController {
    private final FindService<User> userService;

    @GetMapping("/")
    public User getUser() {
        final User one = userService.getOne(0);
        System.out.println(one);
        return null;
    }
}
