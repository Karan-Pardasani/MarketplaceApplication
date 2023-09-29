package com.tutorial.MarketplaceApplication.entities.order;

import org.bson.codecs.pojo.annotations.BsonProperty;

import java.util.Date;

public class DeliveryInfo {

    @BsonProperty(value="delivery_address")
    public String deliveryAddress; // This is the address - In case in delivery: delivery address, and in pickup: pickup address

    @BsonProperty(value = "delivery_cost")
    public int deliveryCost;
    @BsonProperty("delivery_date")
    public Date deliveryDate;

}
