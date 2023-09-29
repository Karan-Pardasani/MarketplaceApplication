package com.tutorial.MarketplaceApplication.dto.field;

import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TextAreaDTO extends FieldDTO{
    public String content;
}
