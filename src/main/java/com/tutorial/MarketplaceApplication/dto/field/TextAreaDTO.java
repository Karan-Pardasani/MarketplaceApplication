package com.tutorial.MarketplaceApplication.dto.field;

import com.tutorial.MarketplaceApplication.entities.field.TextArea;
import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class TextAreaDTO extends FieldDTO{
    public String content;

    public TextAreaDTO(TextArea textArea) {
        this.content = textArea.getContent();
    }
}
