package com.tutorial.MarketplaceApplication.dto.group;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.tutorial.MarketplaceApplication.dto.field.FieldDTO;
import com.tutorial.MarketplaceApplication.dto.group.deserializers.GroupDTODeserializer;
import com.tutorial.MarketplaceApplication.dto.section.deserializers.SectionDTODeserializer;
import com.tutorial.MarketplaceApplication.entities.group.Group;
import lombok.*;

import java.util.List;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonDeserialize(using = GroupDTODeserializer.class)
public class GroupDTO {
    public String title;
    public String id;
    public Integer order;
    public List<FieldDTO> fields;

    public GroupDTO(Group group){
        this.title = group.getTitle();
        this.id = group.getId().toString();
        this.order = group.getOrder();
        this.fields = group.getFields().stream().map((field) -> field.getFieldDTOInstance()).toList();
    }
}
