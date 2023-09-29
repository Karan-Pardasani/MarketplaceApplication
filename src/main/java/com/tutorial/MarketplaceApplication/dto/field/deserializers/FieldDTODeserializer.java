package com.tutorial.MarketplaceApplication.dto.field.deserializers;

import com.fasterxml.jackson.core.JacksonException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.JsonToken;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tutorial.MarketplaceApplication.dto.field.*;

import java.io.IOException;
import java.util.List;
import java.util.Map;

public class FieldDTODeserializer extends JsonDeserializer<FieldDTO> {
    public int id;
    public String type;
    public int fieldOrder;
    public int size;
    public boolean required;
    public Map<String, Object> _map;

    public FieldDTO createFieldDTO(String _type) throws JsonProcessingException {
        FieldDTO _fieldDTO = null;
        ObjectMapper _mapper = new ObjectMapper();
        if( _type == "checkbox" ){
            _fieldDTO = new CheckboxFieldDTO();
            List<String> options = _mapper.readValue(this._map.get("options").toString(), new TypeReference<List<String>>(){
            });
            String value = (this._map.get("value") == null ? "" : (String)this._map.get("value"));
            ((CheckboxFieldDTO)_fieldDTO).setOptions(options);
            ((CheckboxFieldDTO)_fieldDTO).setValue(value);
            return _fieldDTO;
        } else if (_type == "dropdown") {
            _fieldDTO = new DropdownFieldDTO();
            List<String> options = _mapper.readValue(this._map.get("options").toString(), new TypeReference<List<String>>(){
            });
            String value = (this._map.get("value") == null ? "" : (String)this._map.get("value"));
            ((DropdownFieldDTO)_fieldDTO).setOptions(options);
            ((DropdownFieldDTO)_fieldDTO).setValue(value);
            return _fieldDTO;
        } else if (_type == "radio") {
            _fieldDTO = new RadioButtonFieldDTO();
            List<String> options = _mapper.readValue(this._map.get("options").toString(), new TypeReference<List<String>>(){
            });
            String value = (this._map.get("value") == null ? "" : (String)this._map.get("value"));
            ((RadioButtonFieldDTO)_fieldDTO).setOptions(options);
            ((RadioButtonFieldDTO)_fieldDTO).setValue(value);
            return _fieldDTO;
        } else if (_type == "text_area") {
            _fieldDTO = new TextAreaDTO();
            String _content = (this._map.get("content") == null ? "" : (String) this._map.get("content"));
            ((TextAreaDTO)_fieldDTO).setContent(_content);
        } else if (_type == "textfield") {
            _fieldDTO = new TextFieldDTO();
            String _content = (this._map.get("content") == null ? "" : (String) this._map.get("content"));
            String dataType = (this._map.get("dataType") == null ? "": (String) this._map.get("dataType"));
            ((TextAreaDTO)_fieldDTO).setContent(_content);
        }
        return _fieldDTO;
    }

    @Override
    public FieldDTO deserialize(JsonParser jsonParser, DeserializationContext deserializationContext)
            throws IOException, JacksonException {
        while (jsonParser.nextToken()!= JsonToken.END_OBJECT){
            String name = jsonParser.getCurrentName();
            if(name.equals("type")){
                jsonParser.nextToken();
                this.type = jsonParser.getText();
            } else if (name.equals("id")) {
                jsonParser.nextToken();
                this.id = jsonParser.getIntValue();
            } else if (name.equals("fieldOrder")) {
                jsonParser.nextToken();
                this.fieldOrder = jsonParser.getIntValue();
            } else if (name.equals("size")) {
                jsonParser.nextToken();
                this.size = jsonParser.getIntValue();
            } else if (name.equals("required")) {
                jsonParser.nextToken();
                this.required = jsonParser.getBooleanValue();
            }else{
                jsonParser.nextToken();
                Object item = jsonParser.readValueAsTree();
                _map.put(name, item);
            }
        }
        FieldDTO _fieldDTO = this.createFieldDTO(this.type);
        return _fieldDTO;
    }
}
