package com.tutorial.MarketplaceApplication.dto.tag;

import com.tutorial.MarketplaceApplication.entities.tag.Tag;
import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TagDTO {

    public String id;

    public String tagName;

    public TagDTO(Tag tag){
        this.id = tag.getId().toString();
        this.tagName = tag.getTagName();
    }
}
