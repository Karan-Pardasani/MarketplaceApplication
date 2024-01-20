package com.tutorial.MarketplaceApplication.entities.field;

import com.tutorial.MarketplaceApplication.dto.field.TextFieldDTO;
import lombok.*;
import org.bson.codecs.pojo.annotations.BsonProperty;
import org.bson.types.ObjectId;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class TextField extends Field{

    public String content;

    @BsonProperty(value = "data_type")
    public String dataType;

    public TextField(TextFieldDTO textFieldDTO){
        super(textFieldDTO);
        this.content = textFieldDTO.content;
        this.dataType = textFieldDTO.getDataType();
    }

}
