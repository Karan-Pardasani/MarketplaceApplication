package com.tutorial.MarketplaceApplication.entities.order;

import org.bson.codecs.pojo.annotations.BsonProperty;

import java.util.Date;

public class PickupInfo {

    @BsonProperty(value="pickup_address")
    public String pickupAddress; // This is the address - In case in delivery: delivery address, and in pickup: pickup address

    @BsonProperty(value = "pickup_date")
    public Date pickupDate;
    // In case of delivery: The status can be Preparing, Shipped, Delivered
    // In case of pickup: The status can be Preparing, Ready for Pickup, Pickedup

}
