package com.tutorial.MarketplaceApplication.dto.product;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.tutorial.MarketplaceApplication.dto.section.SectionDTO;
import com.tutorial.MarketplaceApplication.dto.tag.TagDTO;
import lombok.*;

import java.util.List;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonDeserialize(using = ProductTemplateDTODeserializer.class)
public class ProductTemplateDTO {

    public int id;
    public String title;
    public int sellerId;
    public List<SectionDTO> sections;
    public List<TagDTO> tags;
    public String status; //Can be one of "draft", "published"

}
