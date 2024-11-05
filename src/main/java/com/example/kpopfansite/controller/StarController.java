package com.example.kpopfansite.controller;

import com.example.kpopfansite.model.Star;
import com.example.kpopfansite.repository.StarRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/stars")
public class StarController {

    private final StarRepository starRepository;

    public StarController(StarRepository starRepository) {
        this.starRepository = starRepository;
    }

    @GetMapping
    public List<Star> getAllStars() {
        return starRepository.findAll();
    }

    @GetMapping("/group/{groupName}")
    public List<Star> getStarsByGroup(@PathVariable String groupName) {
        return starRepository.findByGroupName(groupName);
    }
}
