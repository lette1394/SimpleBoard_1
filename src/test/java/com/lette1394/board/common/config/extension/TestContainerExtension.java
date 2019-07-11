package com.lette1394.board.common.config.extension;

import com.lette1394.board.common.config.repository.BoardMySQLContainer;
import org.junit.jupiter.api.extension.BeforeAllCallback;
import org.junit.jupiter.api.extension.BeforeEachCallback;
import org.junit.jupiter.api.extension.ExtensionContext;

public class TestContainerExtension implements BeforeEachCallback, BeforeAllCallback {

    private BoardMySQLContainer testContainer;

    @Override
    public void beforeAll(final ExtensionContext context) {
        testContainer = new BoardMySQLContainer();
        testContainer.start();
        System.setProperty("DB_URL", testContainer.getJdbcUrl());
        System.setProperty("DB_USERNAME", testContainer.getUsername());
        System.setProperty("DB_PASSWORD", testContainer.getPassword());
        System.setProperty("DB_DRIVER_CLASS_NAME", testContainer.getDriverClassName());
    }

    @Override
    public void beforeEach(final ExtensionContext context) {
        testContainer.start();
    }
}
