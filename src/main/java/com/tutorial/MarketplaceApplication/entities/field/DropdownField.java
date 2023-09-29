package com.tutorial.MarketplaceApplication.entities.field;

import lombok.*;
import org.bson.codecs.pojo.annotations.BsonProperty;

import java.util.List;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DropdownField extends Field{

    public List<String> options;

    public String value;
}
