package com.lette1394.board.common.config.extension;

import com.lette1394.board.common.config.repository.BoardMySQLContainer;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.extension.AfterAllCallback;
import org.junit.jupiter.api.extension.AfterEachCallback;
import org.junit.jupiter.api.extension.BeforeAllCallback;
import org.junit.jupiter.api.extension.BeforeEachCallback;
import org.junit.jupiter.api.extension.ExtensionContext;
import org.junit.jupiter.api.extension.ExtensionContext.Namespace;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.TestContextManager;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

@Slf4j
@Testcontainers
public class TestContainerExtension implements BeforeEachCallback, AfterEachCallback, BeforeAllCallback {

    private static final Namespace SPRING_NAMESPACE = Namespace.create(SpringExtension.class);

    @Container
    private static final BoardMySQLContainer testContainer = BoardMySQLContainer.INSTANCE;

    @Override
    public void beforeAll(final ExtensionContext context) throws Exception {
        testContainer.init();
    }

    @Override
    public void beforeEach(final ExtensionContext context) throws Exception {
        log.info("===== test container started =====");
        testContainer.start();

//        Class<?> testClass = context.getRequiredTestClass();
//        ExtensionContext.Store store = context.getStore(SPRING_NAMESPACE);
//        TestContextManager testContextManager = store.getOrComputeIfAbsent(testClass, TestContextManager::new, TestContextManager.class);
//        String property1 = testContextManager.getTestContext().getApplicationContext().getEnvironment().getProperty("spring.datasource.username");
//        String url1 = testContextManager.getTestContext().getApplicationContext().getEnvironment().getProperty("spring.datasource.url");
//        log.info("---------------------------------" + property1 + "---------------bbbbbb");
//        log.info("---------------------------------" + url1 + "---------------bbbbbb");
//
//
//        String property = testContextManager.getTestContext().getApplicationContext().getEnvironment().getProperty("spring.datasource.username");
//        String url = testContextManager.getTestContext().getApplicationContext().getEnvironment().getProperty("spring.datasource.url");
//        log.info("---------------------------------" + property + "---------------aaaaaaa");
//        log.info("---------------------------------" + url + "---------------aaaaaaa");
    }

    @Override
    public void afterEach(final ExtensionContext context) throws Exception {
//        testContainer.stop();
        log.info("===== test container stopped =====");
    }
}
