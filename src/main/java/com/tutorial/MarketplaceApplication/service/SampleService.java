package com.tutorial.MarketplaceApplication.service;

import com.tutorial.MarketplaceApplication.entities.sample.Sample;
import com.tutorial.MarketplaceApplication.entities.sample.SampleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class SampleService {

    @Autowired
    private SampleRepository sampleRepository;

    // CRUD Operations - CREATE, READ, UPDATE, DELETE

    public Sample addSample(Sample sample){
        sample.setId(UUID.randomUUID().toString().split("-")[0]);
        return sampleRepository.save(sample);
    }

    public List<Sample> findAllTasks(){
        return sampleRepository.findAll();
    }

    public Sample getSampleBySampleId(String sampleId){
        return sampleRepository.findById(sampleId).get();
    }

    public List<Sample> getTaskByFirstName(String firstName){
        return sampleRepository.findByFirstName(firstName);
    }

    public List<Sample> getTaskByLastName(String lastName){
        return sampleRepository.findByLastName(lastName);
    }

    public Sample updateSample(Sample sampleRequest){
        // get existing document from DB populate new value from object
        Sample existingSample = sampleRepository.findById(sampleRequest.getId()).get();
        existingSample.setFirstName(sampleRequest.getFirstName());
        existingSample.setLastName(sampleRequest.getLastName());
        return sampleRepository.save(existingSample);
    }

    public String deleteSample(String sampleId){
        sampleRepository.deleteById(sampleId);
        return sampleId + " task deleted from dashboard";
    }

}
