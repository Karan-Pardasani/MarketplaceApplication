package com.tutorial.MarketplaceApplication.dto.group.deserializers;

import com.fasterxml.jackson.core.JacksonException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonToken;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tutorial.MarketplaceApplication.dto.field.FieldDTO;
import com.tutorial.MarketplaceApplication.dto.group.GroupDTO;

import java.io.IOException;
import java.lang.reflect.Type;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class GroupDTODeserializer extends JsonDeserializer<GroupDTO> {
    private String title;
    private String id;

    public Integer order;

    public List<FieldDTO> fields;

    private Map<String, Object> _map;

    public void extractAttributes(JsonParser jsonParser) throws IOException, JacksonException{
        while (jsonParser.nextToken() != JsonToken.END_OBJECT){
            String name = jsonParser.getCurrentName();
            if("group_title".equals(name)){
                jsonParser.nextToken();
                this.title = jsonParser.getText();
            }else if("id".equals(name)){
                jsonParser.nextToken();
                this.id = jsonParser.getText();
            } else if ("section_order".equals(name)) {
                jsonParser.nextToken();
                this.order = jsonParser.getIntValue();
            } else if ("fields".equals(name)) {
                jsonParser.nextToken();
                TypeReference<List<FieldDTO>> ref = new TypeReference<List<FieldDTO>>() {};
                List<FieldDTO> fields = jsonParser.readValueAs(ref);
                this.fields = fields;
            }
        }
    }

    @Override
    public GroupDTO deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JacksonException {
        this._map = new HashMap<>();
        GroupDTO groupDTO = new GroupDTO();
        ObjectMapper mapper = new ObjectMapper();
        this.extractAttributes(jsonParser);
        groupDTO.setTitle(this.title);
        groupDTO.setId(this.id);
        groupDTO.setFields(fields);
        groupDTO.setOrder(this.order);
        return groupDTO;

    }
}
