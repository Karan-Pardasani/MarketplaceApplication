package com.tutorial.MarketplaceApplication.entities.section;


import com.tutorial.MarketplaceApplication.dto.section.CarouselSectionDTO;
import com.tutorial.MarketplaceApplication.dto.section.FormSectionDTO;
import com.tutorial.MarketplaceApplication.dto.section.SectionDTO;
import com.tutorial.MarketplaceApplication.dto.section.TextEditorSectionDTO;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Field;

public abstract class Section {
    public String type;
    public String title;

    @Id
    public ObjectId id;

    @Field("section_order")
    public Integer sectionOrder;

    @Field(value = "schema_version")
    public int schemaVersion;

    public SectionDTO getSectionDTO(){
        SectionDTO response = null;
        if(this.type.equals("carousel")){
            response = new CarouselSectionDTO((CarouselSection) this);
        } else if (this.type.equals("form")) {
            response = new FormSectionDTO((FormSection) this);
        } else if (this.type.equals("text-editor")) {
            response = new TextEditorSectionDTO((TextEditorSection) this);
        }
        response.title = this.title;
        response.type = this.type;
        response.sectionOrder = this.sectionOrder;
        return (SectionDTO)response;
    }
}
