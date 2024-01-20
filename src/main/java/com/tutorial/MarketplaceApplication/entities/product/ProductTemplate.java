package com.tutorial.MarketplaceApplication.entities.product;

import com.tutorial.MarketplaceApplication.dto.product.ProductTemplateDTO;
import com.tutorial.MarketplaceApplication.dto.section.*;
import com.tutorial.MarketplaceApplication.dto.tag.TagDTO;
import com.tutorial.MarketplaceApplication.entities.section.*;
import com.tutorial.MarketplaceApplication.entities.tag.Tag;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import static com.tutorial.MarketplaceApplication.globalMethods.GlobalFunc.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document("ProductTemplate")
public class ProductTemplate {

    // The sections field will have the default values for dynamic fields and will have values for static fields
    @Id
    public ObjectId id;

    @Field(value = "schema_version")
    public int schemaVersion;

    public String title;

    @Field(value = "seller_id")
    public ObjectId sellerId;

    public List<Section> sections;

    public List<Tag> tags;

    public String status;

    public Section createSectionObject(SectionDTO _sectionDTO){
        Section _section = null;
        if(_sectionDTO.getType().equals("carousel"))
        {
            _section = new CarouselSection((CarouselSectionDTO)_sectionDTO);
        } else if (_sectionDTO.getType().equals("form"))
        {
            _section = new FormSection((FormSectionDTO) _sectionDTO);
        } else if (_sectionDTO.getType().equals("table"))
        {
            _section = new TableSection((TableSectionDTO) _sectionDTO);
        } else if (_sectionDTO.getType().equals("text-editor")) {
            _section = new TextEditorSection((TextEditorSectionDTO)_sectionDTO);
        }
        return _section;
    }

    public ProductTemplate(ProductTemplateDTO productTemplateDTO) {

        if(productTemplateDTO.getId() != null){
            this.id = new ObjectId(productTemplateDTO.getId());
        }
        this.schemaVersion = 1;
        this.title = productTemplateDTO.getTitle();
        if (productTemplateDTO.getSellerId() != null){
            this.sellerId = new ObjectId(productTemplateDTO.getSellerId());
        };
        List<SectionDTO> _sectionDTOList = getValueOrDefault(productTemplateDTO.getSections(), new ArrayList<>());
        this.sections = new ArrayList<>();
        this.tags = new ArrayList<>();
        for(SectionDTO _sectionDTO: _sectionDTOList){
            Section _section = createSectionObject(_sectionDTO);
            this.sections.add(_section);
        }
        this.status = productTemplateDTO.getStatus();
        List<TagDTO> _tagDTOList = Objects.requireNonNullElse(productTemplateDTO.getTags(), new ArrayList<>());
        for(TagDTO _tagDTO: _tagDTOList){
            Tag _tag = new Tag(_tagDTO);
            this.tags.add(_tag);
        }
    }


}
