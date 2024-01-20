package com.tutorial.MarketplaceApplication.entities.shared;

import com.tutorial.MarketplaceApplication.dto.shared.ImageDTO;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.codecs.pojo.annotations.BsonProperty;
import org.bson.types.ObjectId;

@Data
@NoArgsConstructor
public class Image {

    public ObjectId id;

    @BsonProperty(value = "image_link")
    public String imageLink;

    public Integer order;

    public boolean remove;

    public Image(ImageDTO _imageDTO){

        if(_imageDTO.getId() != null) {
            this.id = new ObjectId(_imageDTO.getId());
        }
        this.imageLink = _imageDTO.getFile_url();
        this.order = _imageDTO.getOrder();
        this.remove = _imageDTO.isRemove();
    }
}
