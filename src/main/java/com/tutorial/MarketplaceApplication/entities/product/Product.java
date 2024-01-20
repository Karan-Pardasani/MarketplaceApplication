package com.tutorial.MarketplaceApplication.entities.product;

import com.tutorial.MarketplaceApplication.entities.section.Section;
import com.tutorial.MarketplaceApplication.entities.shared.Image;
import com.tutorial.MarketplaceApplication.entities.tag.Tag;
import org.bson.codecs.pojo.annotations.BsonProperty;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

@Document
public class Product {

    @Field(value = "template_id")
    public int templateId;

    @Field(value = "schema_version")
    public int schemaVersion;

    public List<Section> sections;

    public List<Tag> tags;

    public Image image;

}
