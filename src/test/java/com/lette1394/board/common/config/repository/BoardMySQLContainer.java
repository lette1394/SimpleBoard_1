package com.lette1394.board.common.config.repository;

public class BoardMySQLContainer extends org.testcontainers.containers.MySQLContainer<BoardMySQLContainer> {
    private static final String IMAGE_VERSION = "mysql:8.0";

    public static final BoardMySQLContainer INSTANCE = new BoardMySQLContainer();

    private static boolean used = true;

    public BoardMySQLContainer() {
        super(IMAGE_VERSION);
        this.addEnv("MYSQL_USER", "abc");
        this.addEnv("MYSQL_PASSWORD", "123");
        this.addEnv("MYSQL_ROOT_PASSWORD", "1q2w3e");
    }

    @Override
    public void start() {
        super.start();
        System.setProperty("DB_URL", INSTANCE.getJdbcUrl());
        if (used) {
            System.setProperty("DB_USERNAME", INSTANCE.getUsername());
            System.setProperty("DB_PASSWORD", INSTANCE.getPassword());
            used = false;
        } else {
            System.setProperty("DB_USERNAME", "abc");
            System.setProperty("DB_PASSWORD", "123");
        }
        System.setProperty("DB_PASSWORD", INSTANCE.getPassword());
        System.setProperty("DB_DRIVER_CLASS_NAME", INSTANCE.getDriverClassName());
    }

    @Override
    public void stop() {
        // no op
    }

    @Override
    public String getDriverClassName() {
        return "com.mysql.cj.jdbc.Driver";
    }

    public void init() {
        start();
    }
}
