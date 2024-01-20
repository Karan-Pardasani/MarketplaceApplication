package com.tutorial.MarketplaceApplication.controller;

import com.tutorial.MarketplaceApplication.entities.sample.Sample;
import com.tutorial.MarketplaceApplication.service.SampleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/sample")
public class SampleController {

    @Autowired
    private SampleService sampleService;


    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Sample createSample(@RequestBody Sample sample){
        return sampleService.addSample(sample);
    }

    @GetMapping
    public List<Sample> getSamples(){
        return sampleService.findAllTasks();
    }

    @GetMapping("/{sampleId}")
    public Sample getSample(@PathVariable String sampleId){
        return sampleService.getSampleBySampleId(sampleId);
    }

    @GetMapping("/firstName/{firstName}")
    public List<Sample> findSampleUsingFirstName(@PathVariable String firstName){
        return sampleService.getTaskByFirstName(firstName);
    }

    @GetMapping("/lastName/{lastName}")
    public List<Sample> findSampleUsingLastName(@PathVariable String lastName){
        return sampleService.getTaskByFirstName(lastName);
    }

    @PutMapping
    public Sample updateSample(@RequestBody Sample sample){
        return sampleService.updateSample(sample);
    }

    @DeleteMapping("/{sampleId}")
    public String deleteSample(@PathVariable String sampleId){
        return sampleService.deleteSample(sampleId);
    }

}
