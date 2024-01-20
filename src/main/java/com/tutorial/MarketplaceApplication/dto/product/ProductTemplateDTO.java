package com.tutorial.MarketplaceApplication.dto.product;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.tutorial.MarketplaceApplication.dto.section.*;
import com.tutorial.MarketplaceApplication.dto.tag.TagDTO;
import com.tutorial.MarketplaceApplication.entities.product.ProductTemplate;
import lombok.*;

import java.util.List;

import static com.tutorial.MarketplaceApplication.globalMethods.GlobalFunc.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonDeserialize(using = ProductTemplateDTODeserializer.class)
public class ProductTemplateDTO {

    public String id;
    public String title;
    public String sellerId;
    public List<SectionDTO> sections;
    public List<TagDTO> tags;
    public String status; // Can be one of "draft", "published"

    public ProductTemplateDTO(ProductTemplate productTemplate){
        this.id = getValueOrDefault(productTemplate.getId().toString(), null);
        this.title = getValueOrDefault(productTemplate.getTitle(), "");
        this.sellerId = productTemplate.getSellerId().toString();
        this.sections  = productTemplate.getSections().stream().map((section) -> section.getSectionDTO()).toList();
        this.tags = productTemplate.getTags().stream().map((tag) -> new TagDTO(tag)).toList();
        this.status = productTemplate.getStatus();
    }
}
