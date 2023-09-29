package com.tutorial.MarketplaceApplication.entities.shared;

import org.bson.codecs.pojo.annotations.BsonProperty;
import org.bson.types.ObjectId;

public class Image {

    public ObjectId id;

    @BsonProperty(value = "image_link")
    public String imageLink;

}
