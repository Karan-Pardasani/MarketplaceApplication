package com.tutorial.MarketplaceApplication.entities;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Data // Generates getters and setters
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name= "_user")
public class User implements UserDetails {
    @Id
    @GeneratedValue // Auto increments the value
    private Integer id;
    private String firstname;
    private String lastname;
    private String phoneNumber;

    @Column(nullable = false, unique = true)
    private String email;
    private String password;

    private String streetAddress;
    private String city;

    private String state;
    private String zipCode;
    @Enumerated(EnumType.STRING)
    private Role role;

    public String getAddress(){
        StringBuilder address = new StringBuilder("");
        address.append(streetAddress + " ");
        address.append(city+" ");
        address.append(state+" ");
        address.append(zipCode+" ");
        return address.toString();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public String getPassword(){
        return password;
    }
}