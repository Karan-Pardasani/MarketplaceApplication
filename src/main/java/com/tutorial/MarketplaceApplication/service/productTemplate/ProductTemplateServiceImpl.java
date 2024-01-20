package com.tutorial.MarketplaceApplication.service.productTemplate;

import com.tutorial.MarketplaceApplication.dto.product.ProductTemplateDTO;
import com.tutorial.MarketplaceApplication.entities.product.ProductTemplate;
import com.tutorial.MarketplaceApplication.entities.tag.Tag;
import com.tutorial.MarketplaceApplication.repository.productTemplate.ProductTemplateRepositoryI;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductTemplateServiceImpl implements ProductTemplateServiceI {

    ProductTemplateRepositoryI productTemplateRepository;

    public ProductTemplateServiceImpl(ProductTemplateRepositoryI productTemplateRepository){
        this.productTemplateRepository = productTemplateRepository;
    }

    @Override
    public ProductTemplate create(ProductTemplate productTemplate) {
        return productTemplateRepository.save(productTemplate);
    }

    @Override
    public ProductTemplateDTO update(String id, ProductTemplateDTO productTemplateDTO)
    {
        ProductTemplate productTemplate = new ProductTemplate(productTemplateDTO);
        productTemplate.setId(new ObjectId(id));
        productTemplate = this.productTemplateRepository.save(productTemplate);
        return new ProductTemplateDTO(productTemplate);
    }

    @Override
    public ProductTemplate delete(String id) {

        Optional<ProductTemplate> productTemplate = productTemplateRepository.findById(new ObjectId(id));
        productTemplateRepository.delete(productTemplate.get());
        return productTemplate.get();
    }

    @Override
    public ProductTemplate getProductTemplate(String id) {
        return this.productTemplateRepository.findById(new ObjectId(id)).get();
    }

    @Override
    public List<Tag> updateTags() {
        return null;
    }
}
