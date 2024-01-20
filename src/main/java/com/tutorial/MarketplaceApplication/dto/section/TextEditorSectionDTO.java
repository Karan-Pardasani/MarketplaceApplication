package com.tutorial.MarketplaceApplication.dto.section;

import com.tutorial.MarketplaceApplication.entities.section.TextEditorSection;
import lombok.*;

import java.util.Map;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = true)
public class TextEditorSectionDTO extends SectionDTO {
    String content;

    public TextEditorSectionDTO(TextEditorSection textEditorSection){
        this.content = textEditorSection.content;
    }
}
