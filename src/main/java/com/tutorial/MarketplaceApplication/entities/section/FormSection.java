package com.tutorial.MarketplaceApplication.entities.section;

import com.tutorial.MarketplaceApplication.entities.field.Field;
import org.bson.codecs.pojo.annotations.BsonProperty;
import org.bson.types.ObjectId;

import java.util.List;

public class FormSection {
    @BsonProperty(value = "schema_version")
    public int schemaVersion;

    public ObjectId id;

    public String title;

    public List<Field> fields;

    @BsonProperty(value="section_order")
    public int sectionOrder;
}
