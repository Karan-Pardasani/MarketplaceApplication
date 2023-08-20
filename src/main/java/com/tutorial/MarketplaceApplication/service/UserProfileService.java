package com.tutorial.MarketplaceApplication.service;

import com.tutorial.MarketplaceApplication.dto.UserProfileDTO;
import com.tutorial.MarketplaceApplication.entities.User;
import com.tutorial.MarketplaceApplication.repository.UserProfileRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Optional;

@Service
public class UserProfileService {
    // This service will change the password for the user and update the UserProfileDTO details

    private UserProfileRepository userProfileRepository;

    public UserProfileService(UserProfileRepository userProfileRepository){
        this.userProfileRepository = userProfileRepository;
    }

    public Optional<UserProfileDTO> updateUserProfile(@RequestBody UserProfileDTO userProfileDTO){
        Optional<UserProfileDTO> response = userProfileRepository.updateUserProfile(userProfileDTO);
        return response;
    }

}
