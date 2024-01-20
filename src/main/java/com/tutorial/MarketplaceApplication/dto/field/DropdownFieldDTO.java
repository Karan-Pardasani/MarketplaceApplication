package com.tutorial.MarketplaceApplication.dto.field;

import com.tutorial.MarketplaceApplication.entities.field.DropdownField;
import lombok.*;

import java.util.List;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class DropdownFieldDTO extends FieldDTO {
    public List<String> options;
    public String value;

    public DropdownFieldDTO(DropdownField dropdownField) {
        this.options = dropdownField.getOptions();
        this.value = dropdownField.getValue();
    }
}
