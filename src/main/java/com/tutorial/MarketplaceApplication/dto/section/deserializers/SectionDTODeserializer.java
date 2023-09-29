package com.tutorial.MarketplaceApplication.dto.section.deserializers;

import com.fasterxml.jackson.core.JacksonException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonToken;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tutorial.MarketplaceApplication.dto.field.FieldDTO;
import com.tutorial.MarketplaceApplication.dto.section.*;
import com.tutorial.MarketplaceApplication.dto.shared.ImageDTO;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SectionDTODeserializer extends JsonDeserializer<SectionDTO> {

    private String title;

    private int id;

    private String type;
    private int sectionOrder;

    private Map<String, Object> _map;
    public void findType(JsonParser jsonParser) throws IOException, JacksonException{
        while(jsonParser.nextToken() != JsonToken.END_OBJECT){
            String name = jsonParser.getCurrentName();
            if("type".equals(name)){
                jsonParser.nextToken();
                this.type = jsonParser.getText();
            }
            else if("id".equals(name)){
                jsonParser.nextToken();
                this.id = jsonParser.getValueAsInt();
            } else if ("sectionOrder".equals(name)) {
                jsonParser.nextToken();
                this.sectionOrder = jsonParser.getValueAsInt();
            }else if("title".equals(name)){
                jsonParser.nextToken();
                this.title = jsonParser.getText();
            }else{
                jsonParser.nextToken();
                Object value = jsonParser.readValueAsTree();
                _map.put(name, value);
                jsonParser.skipChildren();
            }
        }
    }
    @Override
    public SectionDTO deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JacksonException {
        this._map = new HashMap<>();
        SectionDTO sectionDTO = null;
        this.findType(jsonParser);
        ObjectMapper mapper = new ObjectMapper();
        if(this.type.equals("carousel")){
            String _images = this._map.get("images").toString();
            List<ImageDTO> images = mapper.readValue(_images, new TypeReference<List<ImageDTO>>() {});
            sectionDTO = CarouselSectionDTO.builder().images(images).build();
        }
        else if (this.type.equals("form")) {
            sectionDTO = new FormSectionDTO();
            String _fields = this._map.get("fields").toString();
            List<FieldDTO> fields = mapper.readValue(_fields, new TypeReference<List<FieldDTO>>() {});
            sectionDTO = FormSectionDTO.builder().fields(fields).build();
        }
        else if(this.type.equals("table")){
            sectionDTO = new TableSectionDTO();
            String _fields = this._map.get("fields").toString();
            List<FieldDTO> fields = mapper.readValue(_fields, new TypeReference<List<FieldDTO>>() {});
            sectionDTO = TableSectionDTO.builder().fields(fields).build();
        }
        else if(this.type.equals("text-editor")){
            sectionDTO = new TextEditorSectionDTO();
            String _content = _map.get("content").toString();
            sectionDTO = TextEditorSectionDTO.builder().content(_content).build();
        }
        else{
            // Throw exception Wrong Parameters!!!
        }
        return sectionDTO;
    }
}
