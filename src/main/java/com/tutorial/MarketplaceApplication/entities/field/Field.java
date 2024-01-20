package com.tutorial.MarketplaceApplication.entities.field;


import com.tutorial.MarketplaceApplication.dto.field.*;
import lombok.*;
import org.bson.codecs.pojo.annotations.BsonProperty;
import org.bson.types.ObjectId;

// Currently assumed that all the fields will be used to get user inputs i.e. buyers. And, the seller can create
// all the static data inside the text editor.
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public abstract class Field {

    public ObjectId id;
    @BsonProperty(value = "schema_version")
    public int schemaVersion;

    public String type;// The type can be one of: "checkbox", "dropdown", "radio", "text_area", "textfield"

    @BsonProperty(value = "field_order")
    public int fieldOrder;

    public int size;

    public boolean required;

    public FieldDTO getFieldDTOInstance(){
        FieldDTO response = null;
        if(this.type.equals("checkbox")){
            response = new CheckboxFieldDTO((CheckboxField) this);
        } else if (this.type.equals("dropdown") ) {
            response = new DropdownFieldDTO((DropdownField) this);
        } else if (this.type.equals("radio") ) {
            response = new RadioButtonFieldDTO((RadioButtonField) this);
        } else if (this.type.equals("text-area") ) {
            response = new TextAreaDTO((TextArea) this);
        } else if (this.type.equals("text-field") ) {
            response = new TextFieldDTO((TextField)this);
        }
        response.id = this.id.toString();
        response.type = this.type;
        response.fieldOrder = this.fieldOrder;
        response.size = this.size;
        response.fieldOrder = this.fieldOrder;
        return response;
    }

    public Field(FieldDTO _fieldDTO){
        if(_fieldDTO.getId() != null){
            this.id = new ObjectId(_fieldDTO.getId());
        }
        this.schemaVersion = 1;
        this.type = _fieldDTO.getType();
        this.fieldOrder = _fieldDTO.getFieldOrder();
        this.size = _fieldDTO.getSize();
        this.required = _fieldDTO.isRequired();
    }
}
