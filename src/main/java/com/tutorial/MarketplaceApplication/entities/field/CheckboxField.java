package com.tutorial.MarketplaceApplication.entities.field;

import com.tutorial.MarketplaceApplication.dto.field.CheckboxFieldDTO;
import com.tutorial.MarketplaceApplication.dto.field.FieldDTO;
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
public class CheckboxField extends Field{

    public List<String> options;

    public String value;

    public CheckboxField(CheckboxFieldDTO checkboxFieldDTO){
        super(checkboxFieldDTO);
        this.options = Objects.requireNonNullElse(checkboxFieldDTO.getOptions(), new ArrayList<>());
        this.value = checkboxFieldDTO.getValue();
    }

}
