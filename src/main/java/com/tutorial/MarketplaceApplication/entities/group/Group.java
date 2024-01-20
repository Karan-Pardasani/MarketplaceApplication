package com.tutorial.MarketplaceApplication.entities.group;

import com.tutorial.MarketplaceApplication.dto.field.*;
import com.tutorial.MarketplaceApplication.dto.group.GroupDTO;
import com.tutorial.MarketplaceApplication.entities.field.*;
import lombok.*;
import org.bson.types.ObjectId;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Group {
    public ObjectId id;
    public Integer order;
    public String title;
    public List<Field> fields;

    public Field createFieldObject(FieldDTO _fieldDTO){
        Field _field = null;
        if(_fieldDTO.getType().equals("checkbox"))
        {
            _field = new CheckboxField((CheckboxFieldDTO) _fieldDTO);
        } else if (_fieldDTO.getType().equals("dropdown"))
        {
            _field = new DropdownField((DropdownFieldDTO) _fieldDTO);
        } else if (_fieldDTO.getType().equals("radio"))
        {
            _field = new RadioButtonField((RadioButtonFieldDTO) _fieldDTO);
        } else if (_fieldDTO.getType().equals("text_area"))
        {
            _field = new TextArea((TextAreaDTO) _fieldDTO);
        } else if (_fieldDTO.getType().equals("textfield"))
        {
            _field = new TextField((TextFieldDTO) _fieldDTO);
        }
        return _field;
    }
    public Group(GroupDTO groupDTO){
        if(groupDTO.getId() != null) {
            this.id = new ObjectId(groupDTO.getId());
        }
        this.order = groupDTO.getOrder();
        this.title = groupDTO.getTitle();
        List<FieldDTO> _fieldDTOList = Objects.requireNonNullElse(groupDTO.getFields(), new ArrayList<>());
        this.fields = new ArrayList<>();
        for(FieldDTO _fieldDTO: _fieldDTOList){
            this.fields.add(createFieldObject(_fieldDTO));
        }
    }
}
