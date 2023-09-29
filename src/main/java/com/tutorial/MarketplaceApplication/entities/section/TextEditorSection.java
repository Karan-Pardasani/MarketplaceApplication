package com.tutorial.MarketplaceApplication.entities.section;

import org.bson.Document;
import org.bson.codecs.pojo.annotations.BsonProperty;
import org.bson.types.ObjectId;

public class TextEditorSection implements Section{

    public String title;

    @BsonProperty(value = "schema_version")
    public int schemaVersion;

    public ObjectId id;

    public Document content;

}
