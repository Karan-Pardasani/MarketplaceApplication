package com.tutorial.MarketplaceApplication.service.productTemplate;

import com.tutorial.MarketplaceApplication.dto.product.ProductTemplateDTO;
import com.tutorial.MarketplaceApplication.entities.product.ProductTemplate;
import com.tutorial.MarketplaceApplication.entities.tag.Tag;
import org.bson.types.ObjectId;

import java.util.List;

public interface ProductTemplateServiceI {
    public ProductTemplate create(ProductTemplate productTemplate);
    public ProductTemplateDTO update(String id, ProductTemplateDTO productTemplateDTO);
    public ProductTemplate delete(String id);
    public ProductTemplate getProductTemplate(String id);
    public List<Tag> updateTags();

}
