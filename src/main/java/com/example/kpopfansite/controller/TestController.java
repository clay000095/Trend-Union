package com.example.kpopfansite.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api")
public class TestController {

    @GetMapping("/public/test")
    public String publicEndpoint() {
        return "This is a public endpoint";
    }

    @GetMapping("/admin/test")
    public String adminEndpoint() {
        return "This is an admin endpoint";
    }

    @GetMapping("/health")
    public String health() {
        return "Service is up and running";
    }

    @GetMapping("/test")
    public String test() {
        return "API is working";
    }
} 