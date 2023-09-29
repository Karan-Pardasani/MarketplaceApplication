package com.tutorial.MarketplaceApplication.dto.section;

import com.tutorial.MarketplaceApplication.dto.field.FieldDTO;
import lombok.*;
import java.util.List;
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TableSectionDTO extends SectionDTO{
    public List<FieldDTO> fields;
}
