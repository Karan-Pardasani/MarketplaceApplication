package com.tutorial.MarketplaceApplication.entities.field;

import lombok.*;
import org.bson.codecs.pojo.annotations.BsonProperty;
import org.bson.types.ObjectId;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TextField extends Field{

    public ObjectId id;

    public String content;

    @BsonProperty(value = "data_type")
    public String dataType;

}
