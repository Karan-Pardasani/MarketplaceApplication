package com.tutorial.MarketplaceApplication.entities.section;

import com.tutorial.MarketplaceApplication.entities.shared.Image;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.bson.codecs.pojo.annotations.BsonProperty;
import org.bson.types.ObjectId;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CarouselSection implements Section {

    @BsonProperty(value = "schema_version")
    public int schemaVersion;

    public String title;

    public ObjectId id;
    List<Image> images;

    @BsonProperty(value="section_order")
    public int sectionOrder;

}
