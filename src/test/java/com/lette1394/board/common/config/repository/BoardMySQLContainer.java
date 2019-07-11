package com.lette1394.board.common.config.repository;

import lombok.extern.slf4j.Slf4j;
import org.testcontainers.containers.MySQLContainer;

@Slf4j
public class BoardMySQLContainer extends MySQLContainer<BoardMySQLContainer> {

    private static final String IMAGE_VERSION = "mysql:8.0";

    public BoardMySQLContainer() {
        super(IMAGE_VERSION);
        withUsername("testadmin");
        withPassword("admin123123");
        withDatabaseName("testdb");
    }

    @Override
    public void start() {
        super.start();
        log.info("===== test container started =====");
    }

    @Override
    public void stop() {
        super.stop();
        log.info("===== test container stopped =====");
    }

    @Override
    public String getDriverClassName() {
        return "com.mysql.cj.jdbc.Driver";
    }
}
