package com.tutorial.MarketplaceApplication.entities.section;

import com.tutorial.MarketplaceApplication.dto.section.CarouselSectionDTO;
import com.tutorial.MarketplaceApplication.dto.shared.ImageDTO;
import com.tutorial.MarketplaceApplication.entities.shared.Image;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.bson.codecs.pojo.annotations.BsonProperty;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CarouselSection extends Section {

    List<Image> images;

    public CarouselSection(CarouselSectionDTO sectionDTO){

        this.schemaVersion = 1;
        if(sectionDTO.getId() != null){
            this.id = new ObjectId(sectionDTO.getId());
        }
        this.type = "carousel";
        this.title = sectionDTO.getTitle();
        this.sectionOrder = sectionDTO.getSectionOrder();
        List<ImageDTO> _imageDTOList = Objects.requireNonNullElse(sectionDTO.getImages(), new ArrayList<>());
        this.images = new ArrayList<>();
        for (ImageDTO _imageDTO: _imageDTOList ) {
            this.images.add(new Image(_imageDTO));
        }
    }

}
