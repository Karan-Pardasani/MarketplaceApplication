package com.tutorial.MarketplaceApplication.dto.field;

import lombok.*;

import java.util.List;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CheckboxFieldDTO extends FieldDTO{
    public List<String> options;
    public String value;
}
