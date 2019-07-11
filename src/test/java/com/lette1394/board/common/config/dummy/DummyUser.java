package com.lette1394.board.common.config.dummy;

import com.lette1394.board.domain.User.model.User;
import com.lette1394.board.domain.User.repository.UserRepository;
import org.junit.jupiter.api.extension.BeforeAllCallback;
import org.junit.jupiter.api.extension.ExtensionContext;
import org.springframework.test.context.junit.jupiter.SpringExtension;

public class DummyUser implements BeforeAllCallback {
    @Override
    public void beforeAll(final ExtensionContext context) {
        UserRepository userRepository = SpringExtension.getApplicationContext(context).getBean(UserRepository.class);
        userRepository.save(User.builder().firstName("-----------------").build());
    }
}
