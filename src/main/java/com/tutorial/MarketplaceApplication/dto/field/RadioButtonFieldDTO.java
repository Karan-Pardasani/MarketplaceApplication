package com.tutorial.MarketplaceApplication.dto.field;

import com.tutorial.MarketplaceApplication.entities.field.RadioButtonField;
import lombok.*;

import java.util.List;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class RadioButtonFieldDTO extends FieldDTO {
    public List<String> options;
    public String value;

    public RadioButtonFieldDTO(RadioButtonField radioButtonField) {
        this.options = radioButtonField.getOptions();
        this.value = radioButtonField.getValue();
    }
}
