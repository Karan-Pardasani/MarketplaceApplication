package com.tutorial.MarketplaceApplication.controller.productTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tutorial.MarketplaceApplication.dto.product.ProductTemplateDTO;
import com.tutorial.MarketplaceApplication.service.productTemplate.ProductTemplateService;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/product-template")
public class ProductTemplateController {
    private ProductTemplateService productTemplateService;
    @PostMapping
    public ResponseEntity<ProductTemplateDTO> create(@RequestBody String requestBody){
        ObjectMapper mapper = new ObjectMapper();
        ProductTemplateDTO productTemplateDTO = null;
        try {
            productTemplateDTO = mapper.readValue(requestBody, ProductTemplateDTO.class);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
        return ResponseEntity.ok().build();
    }

}
