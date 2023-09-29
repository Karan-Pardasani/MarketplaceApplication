package com.tutorial.MarketplaceApplication.entities.tag;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.bson.codecs.pojo.annotations.BsonProperty;
import org.bson.types.ObjectId;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Tag {

    public ObjectId id;

    @BsonProperty(value = "tag_name")
    public String tagName;
}
