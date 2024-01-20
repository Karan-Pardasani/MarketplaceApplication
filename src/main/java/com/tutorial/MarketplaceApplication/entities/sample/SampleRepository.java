package com.tutorial.MarketplaceApplication.entities.sample;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface SampleRepository extends MongoRepository<Sample, String> {
    public List<Sample> findByFirstName(String firstName);
    public List<Sample> findByLastName(String lastName);
}
