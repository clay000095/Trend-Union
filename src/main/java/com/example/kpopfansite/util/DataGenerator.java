package com.example.kpopfansite.util;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class DataGenerator {
    private final StarRepository starRepository;
    private final RedisTemplate<String, Object> redisTemplate;
    private final RabbitTemplate rabbitTemplate;

    @Value("${rabbitmq.queue.likes}")
    private String likesQueue;

    public DataGenerator(StarRepository starRepository, 
                        RedisTemplate<String, Object> redisTemplate,
                        RabbitTemplate rabbitTemplate) {
        this.starRepository = starRepository;
        this.redisTemplate = redisTemplate;
        this.rabbitTemplate = rabbitTemplate;
    }

    public void generateStars(int count) {
        List<String> groups = Arrays.asList("BTS", "BLACKPINK", "TWICE", "EXO", "RED VELVET");
        List<String> positions = Arrays.asList("Vocalist", "Rapper", "Leader", "Visual", "Dancer");
        
        for (int i = 0; i < count; i++) {
            Star star = new Star();
            star.setName("Star " + i);
            star.setGroupName(groups.get(i % groups.size()));
            star.setPosition(positions.get(i % positions.size()));
            star.setDescription("Description for star " + i);
            starRepository.save(star);
            
            // 緩存到 Redis
            redisTemplate.opsForValue().set("star:" + star.getId(), star);
        }
    }
} 