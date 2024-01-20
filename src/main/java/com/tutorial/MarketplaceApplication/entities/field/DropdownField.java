package com.tutorial.MarketplaceApplication.entities.field;

import com.tutorial.MarketplaceApplication.dto.field.DropdownFieldDTO;
import lombok.*;
import org.bson.codecs.pojo.annotations.BsonProperty;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class DropdownField extends Field{

    public List<String> options;

    public String value;

    public DropdownField(DropdownFieldDTO dropdownFieldDTO){
        super(dropdownFieldDTO);
        this.options = Objects.requireNonNullElse(dropdownFieldDTO.getOptions(), new ArrayList<>());
        this.value = dropdownFieldDTO.getValue();
    }
}
