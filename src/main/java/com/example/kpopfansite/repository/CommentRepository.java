package com.example.kpopfansite.repository;

import com.example.kpopfansite.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByStarId(Long starId);
}
