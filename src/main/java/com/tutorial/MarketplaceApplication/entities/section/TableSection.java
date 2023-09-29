package com.tutorial.MarketplaceApplication.entities.section;

import com.tutorial.MarketplaceApplication.entities.field.Field;
import org.bson.types.ObjectId;

import java.util.List;

public class TableSection {
    public ObjectId id;
    public String title;
    public List<Field> fields;
}
