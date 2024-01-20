package com.tutorial.MarketplaceApplication.dto.section;

import com.tutorial.MarketplaceApplication.dto.shared.ImageDTO;
import com.tutorial.MarketplaceApplication.entities.section.CarouselSection;
import com.tutorial.MarketplaceApplication.entities.section.Section;
import lombok.*;

import java.util.List;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = true)
public class CarouselSectionDTO extends SectionDTO{
    public List<ImageDTO> images;

    public CarouselSectionDTO(CarouselSection carouselSection){
        this.images = carouselSection.getImages().stream().map((image) -> new ImageDTO(image)).toList();
    }

    public CarouselSectionDTO(String title, String id,String  type,Integer sectionOrder,List<ImageDTO> images){
        this.title = title;
        this.id = id;
        this.type = type;
        this.sectionOrder = sectionOrder;
        this.images = images;
    }
}
