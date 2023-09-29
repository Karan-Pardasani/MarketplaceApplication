package com.tutorial.MarketplaceApplication.entities.field;


import lombok.*;
import org.bson.codecs.pojo.annotations.BsonProperty;

// Currently assumed that all the fields will be used to get user inputs i.e. buyers. And, the seller can create
// all the static data inside the text editor.
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public abstract class Field {
    @BsonProperty(value = "schema_version")
    public int schemaVersion;

    public String type;// The type can be one of: "checkbox", "dropdown", "radio", "text_area", "textfield"

    @BsonProperty(value = "field_order")
    public int fieldOrder;

    public int size;

    public boolean required;
}
