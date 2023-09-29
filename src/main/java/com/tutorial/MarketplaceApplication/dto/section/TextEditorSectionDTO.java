package com.tutorial.MarketplaceApplication.dto.section;

import lombok.*;

import java.util.Map;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TextEditorSectionDTO extends SectionDTO {
    String content;
}
