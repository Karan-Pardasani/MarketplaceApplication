package com.tutorial.MarketplaceApplication.controller.productTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tutorial.MarketplaceApplication.dto.product.ProductTemplateDTO;
import com.tutorial.MarketplaceApplication.entities.product.ProductTemplate;
import com.tutorial.MarketplaceApplication.repository.productTemplate.ProductTemplateRepositoryI;
import com.tutorial.MarketplaceApplication.service.productTemplate.ProductTemplateServiceImpl;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/product-template")
public class ProductTemplateController {

    private ProductTemplateServiceImpl productTemplateService;

    ProductTemplateController(ProductTemplateServiceImpl productTemplateService){
        this.productTemplateService = productTemplateService;
    }

    @PutMapping("/{_id}")
    @ResponseBody
    public ProductTemplateDTO update(@PathVariable String _id ,@RequestBody String requestBody){
        ObjectMapper mapper = new ObjectMapper();
        ProductTemplateDTO productTemplateDTO = null;
        ProductTemplate productTemplate = null;

        try {
            productTemplateDTO = mapper.readValue(requestBody, ProductTemplateDTO.class);
            return productTemplateService.update(_id, productTemplateDTO);
        } catch (JsonProcessingException e){
            throw new RuntimeException(e);
        }
    }

    @PostMapping("/create")
    @ResponseBody
    public ProductTemplateDTO create(@RequestBody String requestBody){
        ObjectMapper mapper = new ObjectMapper();
        ProductTemplateDTO productTemplateDTO = null;
        ProductTemplate productTemplate = null;
        try {
            productTemplateDTO = mapper.readValue(requestBody, ProductTemplateDTO.class);
            productTemplate = new ProductTemplate(productTemplateDTO);
            productTemplate = this.productTemplateService.create(productTemplate);
            return new ProductTemplateDTO(productTemplate);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }

    @DeleteMapping("/{id}")
    @ResponseBody
    public ProductTemplateDTO delete(@PathVariable String id){
        ProductTemplate productTemplate = this.productTemplateService.delete(id);
        return new ProductTemplateDTO(productTemplate);
    }

    @GetMapping("/{_id}")
    @ResponseBody
    public ProductTemplateDTO get(@PathVariable String _id){
        ProductTemplate productTemplate = this.productTemplateService.getProductTemplate(_id);
        ProductTemplateDTO response = new ProductTemplateDTO(productTemplate);
        return response;
    }

}
