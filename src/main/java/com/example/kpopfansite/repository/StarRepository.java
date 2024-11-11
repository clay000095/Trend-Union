package com.example.kpopfansite.repository;

import com.example.kpopfansite.model.Star;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface StarRepository extends JpaRepository<Star, Long> {
    List<Star> findByGroupName(String groupName);
}
