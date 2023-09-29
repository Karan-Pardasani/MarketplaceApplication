package com.tutorial.MarketplaceApplication.dto.product;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.JsonToken;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.tutorial.MarketplaceApplication.dto.section.SectionDTO;
import com.tutorial.MarketplaceApplication.dto.tag.TagDTO;
import com.tutorial.MarketplaceApplication.entities.section.Section;

import java.io.IOException;
import java.util.List;

public class ProductTemplateDTODeserializer extends JsonDeserializer<ProductTemplateDTO> {
    @Override
    public ProductTemplateDTO deserialize(JsonParser jsonParser, DeserializationContext context)
            throws IOException, JsonProcessingException {

        ProductTemplateDTO productTemplateDTO = new ProductTemplateDTO();

        while(jsonParser.nextToken() != JsonToken.END_OBJECT){
            String key = jsonParser.getCurrentName();
            if("id".equals(key)){
                jsonParser.nextToken();
                productTemplateDTO.setId(jsonParser.getIntValue());
            }else if("title".equals(key)){
                jsonParser.nextToken();
                productTemplateDTO.setTitle(jsonParser.getText());
            }else if("sellerId".equals(key)){
                jsonParser.nextToken();
                productTemplateDTO.setSellerId(jsonParser.getIntValue());
            }else if("status".equals(key)){
                jsonParser.nextToken();
                productTemplateDTO.setStatus(jsonParser.getText());
            }else if("sections".equals(key)){
                jsonParser.nextToken();
                TypeReference<List<SectionDTO>> ref = new TypeReference<>(){};
                List<SectionDTO> sections = jsonParser.readValueAs(ref);
                productTemplateDTO.setSections(sections);
            } else if ("tags".equals(key)) {
                jsonParser.nextToken();
                TypeReference<List<TagDTO>> ref = new TypeReference<List<TagDTO>>() {};
                List<TagDTO> tags = jsonParser.readValueAs(ref);
                productTemplateDTO.setTags(tags);
            }
        }

        return productTemplateDTO;
    }
}
