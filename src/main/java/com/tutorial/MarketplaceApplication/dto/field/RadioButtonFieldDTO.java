package com.tutorial.MarketplaceApplication.dto.field;

import lombok.*;

import java.util.List;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RadioButtonFieldDTO extends FieldDTO {
    public List<String> options;
    public String value;
}
