package com.tutorial.MarketplaceApplication.entities.section;

import com.tutorial.MarketplaceApplication.dto.group.GroupDTO;
import com.tutorial.MarketplaceApplication.dto.section.FormSectionDTO;
import com.tutorial.MarketplaceApplication.entities.group.Group;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.codecs.pojo.annotations.BsonProperty;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FormSection extends Section {

    public List<Group> groups;

    public FormSection(FormSectionDTO _formSectionDTO){
        if(_formSectionDTO.getId() != null) {
            this.id = new ObjectId(_formSectionDTO.getId());
        }
        this.type = "form";
        this.sectionOrder = _formSectionDTO.getSectionOrder();
        this.title = _formSectionDTO.getTitle();
        List<GroupDTO> _groupDTOList = _formSectionDTO.getGroups();
        this.groups = new ArrayList<>();

        for (GroupDTO _groupDTO:  _groupDTOList ) {
            Group currGroup = new Group(_groupDTO);
            this.groups.add(currGroup);
        }

    }
}
