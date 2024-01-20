package com.tutorial.MarketplaceApplication.repository.productTemplate;

import com.tutorial.MarketplaceApplication.dto.product.ProductTemplateDTO;
import com.tutorial.MarketplaceApplication.entities.product.ProductTemplate;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Map;

public interface ProductTemplateRepositoryI extends MongoRepository<ProductTemplate, ObjectId> {



}
