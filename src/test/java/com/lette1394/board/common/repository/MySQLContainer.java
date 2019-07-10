package com.lette1394.board.common.repository;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class MySQLContainer extends org.testcontainers.containers.MySQLContainer {

    @Value("docker.testcontainer.port")
    private int port;

    @Override
    public String getDriverClassName() {
        return "com.mysql.cj.jdbc.Driver";
    }

    public MySQLContainer() {
        super();
        System.out.println(port);
        System.out.println("ppppppppppppppp");
        withExposedPorts(port);
        withDatabaseName("board");
        withUsername("admin");
        withPassword("pw1q2w");


    }
}
