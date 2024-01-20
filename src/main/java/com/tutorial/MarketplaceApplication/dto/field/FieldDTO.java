package com.tutorial.MarketplaceApplication.dto.field;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.tutorial.MarketplaceApplication.dto.field.deserializers.FieldDTODeserializer;
import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonDeserialize(using = FieldDTODeserializer.class)
public abstract class FieldDTO {
    public String id;
    public String type;
    public int fieldOrder;
    public int size;
    public boolean required;
}
