package com.tutorial.MarketplaceApplication.dto.section;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.tutorial.MarketplaceApplication.dto.section.deserializers.SectionDTODeserializer;
import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonDeserialize(using = SectionDTODeserializer.class)
public class SectionDTO {

    public String title;
    public int id;
    public String type;
    public int sectionOrder;


}
