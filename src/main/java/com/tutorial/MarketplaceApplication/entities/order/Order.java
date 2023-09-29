package com.tutorial.MarketplaceApplication.entities.order;

import com.tutorial.MarketplaceApplication.entities.product.Product;

import java.util.List;

public class Order {

    public int sellerId;

    public int buyerId;

    public List<Product> products;

    public Delivery deliveryInfo;

    public int amount;

}
