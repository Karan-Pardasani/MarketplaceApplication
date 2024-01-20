package com.tutorial.MarketplaceApplication.entities.sample;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.repository.MongoRepository;

@Getter
@Setter
@Document
@Data
public class Sample {

    @Id
    public String id;

    public String firstName;

    public String lastName;
}

