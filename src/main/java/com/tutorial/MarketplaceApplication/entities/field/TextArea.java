package com.tutorial.MarketplaceApplication.entities.field;

import lombok.*;
import org.bson.types.ObjectId;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TextArea extends Field{

    public ObjectId id;

    public String content;
}
