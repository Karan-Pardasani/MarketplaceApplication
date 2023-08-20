package com.tutorial.MarketplaceApplication.controller.UserProfile;

import com.tutorial.MarketplaceApplication.dto.UserProfileDTO;
import com.tutorial.MarketplaceApplication.entities.User;
import com.tutorial.MarketplaceApplication.service.UserProfileService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/user-profile")
public class UserProfileController {

    private UserProfileService userProfileService;

    public UserProfileController(UserProfileService userProfileService){
        this.userProfileService = userProfileService;
    }

    @PostMapping("/update")
    public ResponseEntity<UserProfileDTO> updateUserProfile(@RequestBody UserProfileDTO userProfileDTO){
        Optional<UserProfileDTO> response =  this.userProfileService.updateUserProfile(userProfileDTO);
        return ResponseEntity.ok(response.get());
    }

}
