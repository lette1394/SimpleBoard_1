package com.lette1394.board.domain.User.repository.setup;

import org.junit.jupiter.api.extension.BeforeAllCallback;
import org.junit.jupiter.api.extension.ExtensionContext;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.lette1394.board.domain.User.model.User;
import com.lette1394.board.domain.User.repository.UserRepository;

public class DummyUser implements BeforeAllCallback {
    @Override
    public void beforeAll(final ExtensionContext context) {
        UserRepository userRepository = SpringExtension.getApplicationContext(context).getBean(UserRepository.class);
        userRepository.save(User.builder().firstName("-----------------").build());
    }
}
