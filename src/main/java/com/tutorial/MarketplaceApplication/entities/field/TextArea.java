package com.tutorial.MarketplaceApplication.entities.field;

import com.tutorial.MarketplaceApplication.dto.field.TextAreaDTO;
import lombok.*;
import org.bson.types.ObjectId;
import org.w3c.dom.Text;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class TextArea extends Field{


    public String content;

    public TextArea(TextAreaDTO textAreaDTO)
    {
        super(textAreaDTO);
        this.content = textAreaDTO.getContent();
    }
}
