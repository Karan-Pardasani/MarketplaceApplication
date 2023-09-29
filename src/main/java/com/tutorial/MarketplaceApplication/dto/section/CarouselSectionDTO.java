package com.tutorial.MarketplaceApplication.dto.section;

import com.tutorial.MarketplaceApplication.dto.shared.ImageDTO;
import lombok.*;

import java.util.List;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CarouselSectionDTO extends SectionDTO{
    List<ImageDTO> images;
}
