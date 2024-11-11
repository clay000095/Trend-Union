package com.example.kpopfansite.model;

import javax.persistence.*;

@Entity
@Table(name = "stars")
public class Star {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String groupName;
    private String position;
    private String birthDate;
    private String imageUrl;
    private String description;

    // Getters
    public Long getId() { return id; }
    public String getName() { return name; }
    public String getGroupName() { return groupName; }
    public String getPosition() { return position; }
    public String getBirthDate() { return birthDate; }
    public String getImageUrl() { return imageUrl; }
    public String getDescription() { return description; }

    // Setters
    public void setId(Long id) { this.id = id; }
    public void setName(String name) { this.name = name; }
    public void setGroupName(String groupName) { this.groupName = groupName; }
    public void setPosition(String position) { this.position = position; }
    public void setBirthDate(String birthDate) { this.birthDate = birthDate; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
    public void setDescription(String description) { this.description = description; }
}
