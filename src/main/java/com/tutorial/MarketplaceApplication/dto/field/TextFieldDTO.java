package com.tutorial.MarketplaceApplication.dto.field;


import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TextFieldDTO extends FieldDTO {

    public String content;

    public String dataType;

}
