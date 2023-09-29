package com.tutorial.MarketplaceApplication.entities.order;

import org.bson.codecs.pojo.annotations.BsonProperty;
import org.bson.types.ObjectId;

import java.util.Date;

public abstract class Delivery {

    public ObjectId id;

    @BsonProperty("schema_version")
    public int schemaVersion;

    public String mode;//This is the mode of the address - could be either delivery or pickup

    public String status; // Current Status
    // In case of delivery: The status can be Preparing, Shipped, Delivered
    // In case of pickup: The status can be Preparing, Ready for Pickup, Pickedup

}
