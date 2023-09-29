package com.tutorial.MarketplaceApplication.controller.UserProfile;

import com.tutorial.MarketplaceApplication.auth.AuthenticationResponse;
import com.tutorial.MarketplaceApplication.dto.response.UserProfileDTO;
import com.tutorial.MarketplaceApplication.dto.request.ChangePasswordRequest;
import com.tutorial.MarketplaceApplication.service.UserProfileService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/user-profile")
public class UserProfileController {

    private UserProfileService userProfileService;

    public UserProfileController(UserProfileService userProfileService){
        this.userProfileService = userProfileService;
    }

    @GetMapping
    public ResponseEntity<UserProfileDTO> getUserProfile(@RequestParam Map<String, String> queryParameters){
        Optional<UserProfileDTO> response = userProfileService.getUserProfile(queryParameters.get("id"));
        return ResponseEntity.ok(response.get());
    }

    @PostMapping("/update")
    public ResponseEntity<UserProfileDTO> updateUserProfile(@RequestBody UserProfileDTO userProfileDTO){
        Optional<UserProfileDTO> response =  this.userProfileService.updateUserProfile(userProfileDTO);
        return ResponseEntity.ok(response.get());
    }

    @PostMapping("/update-password")
    public ResponseEntity<AuthenticationResponse> updatePassword(@RequestBody ChangePasswordRequest changePasswordRequest){
        String token = this.userProfileService.updatePassword(changePasswordRequest);
        return ResponseEntity.ok(new AuthenticationResponse(token));
    }

}
