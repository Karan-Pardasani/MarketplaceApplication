package com.tutorial.MarketplaceApplication.dto.section;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.tutorial.MarketplaceApplication.dto.section.deserializers.SectionDTODeserializer;
import com.tutorial.MarketplaceApplication.entities.section.CarouselSection;
import com.tutorial.MarketplaceApplication.entities.section.FormSection;
import com.tutorial.MarketplaceApplication.entities.section.Section;
import com.tutorial.MarketplaceApplication.entities.section.TextEditorSection;
import lombok.*;
import org.bson.types.ObjectId;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonDeserialize(using = SectionDTODeserializer.class)
public class SectionDTO {

    public String title;
    public String id;
    public String type;
    public int sectionOrder;


}
