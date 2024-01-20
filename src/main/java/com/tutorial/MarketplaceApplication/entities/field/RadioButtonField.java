package com.tutorial.MarketplaceApplication.entities.field;

import com.tutorial.MarketplaceApplication.dto.field.FieldDTO;
import com.tutorial.MarketplaceApplication.dto.field.RadioButtonFieldDTO;
import lombok.*;
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
public class RadioButtonField extends Field{

    public List<String> options;

    public String value;

    public RadioButtonField(RadioButtonFieldDTO radioButtonFieldDTO){
        super(radioButtonFieldDTO);
        this.options = Objects.requireNonNullElse(radioButtonFieldDTO.getOptions(), new ArrayList<>());
        this.value = radioButtonFieldDTO.getValue();
    }

}
