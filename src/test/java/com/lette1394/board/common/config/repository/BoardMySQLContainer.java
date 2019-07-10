package com.lette1394.board.common.config.repository;

public class BoardMySQLContainer extends org.testcontainers.containers.MySQLContainer<BoardMySQLContainer> {
    private static final String IMAGE_VERSION = "mysql:8.0";

    public static final BoardMySQLContainer INSTANCE = new BoardMySQLContainer();

    public BoardMySQLContainer() {
        super(IMAGE_VERSION);
    }

    @Override
    public void start() {
        super.start();
        System.setProperty("DB_URL", INSTANCE.getJdbcUrl());
        System.setProperty("DB_USERNAME", INSTANCE.getUsername());
        System.setProperty("DB_PASSWORD", INSTANCE.getPassword());
        System.setProperty("DB_DRIVER_CLASS_NAME", INSTANCE.getDriverClassName());
    }

    @Override
    public void stop() {
        super.stop();
    }

    @Override
    public String getDriverClassName() {
        return "com.mysql.cj.jdbc.Driver";
    }

    public void init() {
        start();
    }
}
