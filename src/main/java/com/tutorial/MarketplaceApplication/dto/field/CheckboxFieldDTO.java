package com.tutorial.MarketplaceApplication.dto.field;

import com.tutorial.MarketplaceApplication.entities.field.CheckboxField;
import com.tutorial.MarketplaceApplication.entities.field.Field;
import lombok.*;

import java.util.List;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = true)
public class CheckboxFieldDTO extends FieldDTO{
    public List<String> options;
    public String value;

    public CheckboxFieldDTO(CheckboxField field) {
        this.options = field.getOptions();
        this.value = field.getValue();
    }
}
