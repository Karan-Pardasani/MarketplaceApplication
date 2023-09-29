package com.tutorial.MarketplaceApplication.dto.section.deserializers;

import com.fasterxml.jackson.core.JacksonException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.tutorial.MarketplaceApplication.dto.section.CarouselSectionDTO;

import java.io.IOException;

public class CarouselDTODeserializer extends JsonDeserializer<CarouselSectionDTO> {

    @Override
    public CarouselSectionDTO deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JacksonException {
        CarouselSectionDTO carouselSectionDTO = new CarouselSectionDTO();
        return carouselSectionDTO;
    }
}
