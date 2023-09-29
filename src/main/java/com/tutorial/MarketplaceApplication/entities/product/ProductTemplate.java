package com.tutorial.MarketplaceApplication.entities.product;

import com.tutorial.MarketplaceApplication.entities.section.Section;
import com.tutorial.MarketplaceApplication.entities.tag.Tag;
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
public class ProductTemplate {

    // The sections field will have the default values for dynamic fields and will have values for static fields

    public ObjectId id;

    @BsonProperty(value = "schema_version")
    public int schemaVersion;

    public String title;

    @BsonProperty(value = "seller_id")
    public ObjectId sellerId;

    public List<Section> sections;

    public List<Tag> tags;


}
