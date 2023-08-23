package com.tutorial.MarketplaceApplication.dto;

import com.tutorial.MarketplaceApplication.entities.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserProfileDTO {
    private String firstname;
    private String lastname;
    private String email;
    private String streetAddress;
    private String city;

    private String phoneNumber;
    private String state;
    private String zipCode;
    public String getAddress(){
        StringBuilder address = new StringBuilder("");
        address.append(streetAddress + " ");
        address.append(city+" ");
        address.append(state+" ");
        address.append(zipCode+" ");
        return address.toString();
    }

    public UserProfileDTO(User user){
        this.firstname = user.getFirstname();
        this.lastname = user.getLastname();
        this.email = user.getEmail();
        this.streetAddress = user.getStreetAddress();
        this.city = user.getCity();
        this.state = user.getState();
        this.zipCode = user.getZipCode();
        this.phoneNumber = user.getPhoneNumber();
    }

    public String getUsername() {
        return email;
    }


}
