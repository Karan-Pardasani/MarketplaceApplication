package com.tutorial.MarketplaceApplication.entities.section;

import com.tutorial.MarketplaceApplication.dto.section.TableSectionDTO;
import com.tutorial.MarketplaceApplication.entities.field.Field;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TableSection extends Section{
    public List<Field> fields;
    public TableSection(TableSectionDTO sectionDTO) {
    }
}
