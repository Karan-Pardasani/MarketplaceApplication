package com.tutorial.MarketplaceApplication.dto.response;


import com.tutorial.MarketplaceApplication.entities.section.Section;
import com.tutorial.MarketplaceApplication.entities.shared.Image;
import com.tutorial.MarketplaceApplication.entities.tag.Tag;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductDTO {
    public List<Section> sections;
    public List<Tag> tags;
    public Image image;
}
