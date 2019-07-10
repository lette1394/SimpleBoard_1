package com.lette1394.board.common.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;

import javax.sql.DataSource;

@TestConfiguration
@ConfigurationProperties(prefix = "spring.datasource")
public class ConfigData {

    @Value("${url}")
    private String dbUrl;

    @Value("${username}")
    private String dbUserName;

    @Value("${password}")
    private String dbPassword;

    @Bean
    public DataSource getDatasource(){
        return DataSourceBuilder.create().url(dbUrl).username(dbUserName).password(dbPassword).build();
    }
}
