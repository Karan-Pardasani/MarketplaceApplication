package com.tutorial.MarketplaceApplication.entities.product;

import com.tutorial.MarketplaceApplication.entities.section.Section;
import com.tutorial.MarketplaceApplication.entities.shared.Image;
import com.tutorial.MarketplaceApplication.entities.tag.Tag;
import org.bson.codecs.pojo.annotations.BsonProperty;

import java.util.List;

public class Product {

    @BsonProperty(value = "template_id")
    public int templateId;

    @BsonProperty(value = "schema_version")
    public int schemaVersion;

    public List<Section> sections;

    public List<Tag> tags;

    public Image image;

}
