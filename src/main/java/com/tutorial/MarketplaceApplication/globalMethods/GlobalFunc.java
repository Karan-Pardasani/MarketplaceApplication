package com.tutorial.MarketplaceApplication.globalMethods;

public class GlobalFunc {

    public static <T> T getValueOrDefault(T value, T defaultValue){
        return value == null ? defaultValue : value;
    }

}
