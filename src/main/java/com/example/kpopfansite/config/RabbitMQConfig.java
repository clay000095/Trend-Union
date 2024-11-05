package com.example.kpopfansite.config;

import org.springframework.amqp.core.Queue;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitMQConfig {

    @Bean
    public Queue commentQueue() {
        return new Queue("commentQueue", true);
    }
}
