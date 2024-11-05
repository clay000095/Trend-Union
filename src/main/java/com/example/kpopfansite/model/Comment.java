package com.example.kpopfansite.model;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User user;

    @ManyToOne
    private Star star;

    private String content;
    private LocalDateTime createdAt;

    // Getters and setters
}
