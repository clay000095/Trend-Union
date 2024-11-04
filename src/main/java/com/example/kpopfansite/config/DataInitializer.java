package com.example.kpopfansite.config;

import com.example.kpopfansite.model.Star;
import com.example.kpopfansite.repository.StarRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataInitializer {

    @Bean
    public CommandLineRunner initData(StarRepository starRepository) {
        return args -> {
            // BTS members
            createStar(starRepository, 
                "Jin", 
                "BTS", 
                "Vocalist", 
                "1992-12-04",
                "https://example.com/jin.jpg",
                "Jin is a member of BTS, known for his vocals and worldwide handsome title.");

            createStar(starRepository,
                "Jungkook",
                "BTS",
                "Main Vocalist, Lead Dancer",
                "1997-09-01",
                "https://example.com/jungkook.jpg",
                "Jungkook is the youngest member of BTS, known as the Golden Maknae.");

            // BLACKPINK members
            createStar(starRepository,
                "Lisa",
                "BLACKPINK",
                "Main Dancer, Lead Rapper",
                "1997-03-27",
                "https://example.com/lisa.jpg",
                "Lisa is BLACKPINK's main dancer and lead rapper.");

            createStar(starRepository,
                "Jisoo",
                "BLACKPINK",
                "Lead Vocalist, Visual",
                "1995-01-03",
                "https://example.com/jisoo.jpg",
                "Jisoo is BLACKPINK's visual and lead vocalist.");
        };
    }

    private void createStar(StarRepository repo, String name, String group, 
                          String position, String birthDate, String imageUrl, 
                          String description) {
        Star star = new Star();
        star.setName(name);
        star.setGroupName(group);
        star.setPosition(position);
        star.setBirthDate(birthDate);
        star.setImageUrl(imageUrl);
        star.setDescription(description);
        repo.save(star);
    }
}
