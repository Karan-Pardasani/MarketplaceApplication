package com.tutorial.MarketplaceApplication.dto.shared;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.tutorial.MarketplaceApplication.entities.shared.Image;
import lombok.*;
import org.bson.types.ObjectId;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ImageDTO {

    public String id;

    public int order;

    public boolean remove;

    public String file_url;

    public ImageDTO(Image image){
        this.id = image.getId().toString();
        this.order = image.getOrder();
        this.remove = image.isRemove();
        this.file_url = image.getImageLink();
    }
}
