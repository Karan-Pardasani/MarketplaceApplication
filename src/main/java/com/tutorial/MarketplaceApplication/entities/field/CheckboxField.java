package com.tutorial.MarketplaceApplication.entities.field;

import lombok.*;

import java.util.List;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CheckboxField extends Field{

    public List<String> options;

    public boolean checked;
}
