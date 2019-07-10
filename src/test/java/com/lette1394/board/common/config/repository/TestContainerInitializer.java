package com.lette1394.board.common.config.repository;

import org.springframework.boot.test.util.ApplicationContextTestUtils;
import org.springframework.boot.test.util.TestPropertyValues;
import org.springframework.context.ApplicationContextInitializer;
import org.springframework.context.ConfigurableApplicationContext;

import java.util.ArrayList;
import java.util.List;

public class TestContainerInitializer implements ApplicationContextInitializer<ConfigurableApplicationContext> {

    private static final BoardMySQLContainer INSTANCE = BoardMySQLContainer.INSTANCE;

    @Override
    public void initialize(ConfigurableApplicationContext configurableApplicationContext) {
        List<String> pairs = new ArrayList<>();
        INSTANCE.start();
        pairs.add(String.format("spring.datasource.url=%s", INSTANCE.getJdbcUrl()));
        pairs.add(String.format("spring.datasource.username=%s", INSTANCE.getUsername()));
        pairs.add(String.format("spring.datasource.password=%s", INSTANCE.getPassword()));

        TestPropertyValues.of(pairs).applyTo(configurableApplicationContext.getEnvironment());
    }
}