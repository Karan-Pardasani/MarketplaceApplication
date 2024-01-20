package com.tutorial.MarketplaceApplication.entities.section;

import com.tutorial.MarketplaceApplication.dto.section.TextEditorSectionDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.Document;
import org.bson.codecs.pojo.annotations.BsonProperty;
import org.bson.types.ObjectId;

import java.util.Objects;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TextEditorSection extends Section{

    @BsonProperty(value = "schema_version")
    public int schemaVersion;

    public ObjectId id;

    public String content;

    public TextEditorSection(TextEditorSectionDTO sectionDTO) {
        if(sectionDTO.getId() != null) {
            this.id = new ObjectId(sectionDTO.getId());
        }
        this.title = sectionDTO.getTitle();
        this.sectionOrder = sectionDTO.getSectionOrder();
        this.schemaVersion = 1;
        this.type = "text-editor";
        this.content = Objects.requireNonNullElse(sectionDTO.getContent(), "");
    }
}
