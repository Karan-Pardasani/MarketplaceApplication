package com.tutorial.MarketplaceApplication.dto.field;


import com.tutorial.MarketplaceApplication.entities.field.TextField;
import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class TextFieldDTO extends FieldDTO {

    public String content;

    public String dataType;

    public TextFieldDTO(TextField textField) {
        this.content = textField.getContent();
        this.dataType = textField.getDataType();
    }
}
