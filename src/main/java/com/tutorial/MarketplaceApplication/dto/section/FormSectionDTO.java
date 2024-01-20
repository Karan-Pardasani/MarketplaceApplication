package com.tutorial.MarketplaceApplication.dto.section;

import com.tutorial.MarketplaceApplication.dto.field.FieldDTO;
import com.tutorial.MarketplaceApplication.dto.group.GroupDTO;
import com.tutorial.MarketplaceApplication.entities.section.FormSection;
import lombok.*;

import java.util.List;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = true)
public class FormSectionDTO extends SectionDTO{
    public List<GroupDTO> groups;

    public FormSectionDTO(FormSection formSection){
        this.groups = formSection.groups.stream().map((group) -> new GroupDTO(group)).toList();
    }
}
