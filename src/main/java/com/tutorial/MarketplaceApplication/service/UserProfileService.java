package com.tutorial.MarketplaceApplication.service;

import com.tutorial.MarketplaceApplication.dto.response.UserProfileDTO;
import com.tutorial.MarketplaceApplication.dto.request.ChangePasswordRequest;
import com.tutorial.MarketplaceApplication.entities.User;
import com.tutorial.MarketplaceApplication.errors.IncorrectPasswordException;
import com.tutorial.MarketplaceApplication.repository.UserProfileRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Optional;

@Service
public class UserProfileService {
    // This service will change the password for the user and update the UserProfileDTO details

    private UserProfileRepository userProfileRepository;

    private PasswordEncoder passwordEncoder;

    private JwtService jwtService;


    public UserProfileService(UserProfileRepository userProfileRepository,
                              PasswordEncoder passwordEncoder,
                              JwtService jwtService){
        this.userProfileRepository = userProfileRepository;
        this.jwtService = jwtService;
        this.passwordEncoder = passwordEncoder;
    }

    public Optional<UserProfileDTO> updateUserProfile(@RequestBody UserProfileDTO userProfileDTO){
        Optional<UserProfileDTO> response = userProfileRepository.updateUserProfile(userProfileDTO);
        return response;
    }

    public Optional<UserProfileDTO> getUserProfile(String id) {
        Optional<User> user = null;
        if(id == null){
            user = Optional.of(userProfileRepository.getCurrentUser());
        }else{
            user = userProfileRepository.getUser(id);
        }
        Optional<UserProfileDTO> userProfileDTO = Optional.empty();
        if(user.isPresent()){
            userProfileDTO = Optional.of(new UserProfileDTO(user.get()));
        }
        return userProfileDTO;
    }

    public String updatePassword(ChangePasswordRequest changePasswordRequest) {
        User currentUser = userProfileRepository.getCurrentUser();
        if( passwordEncoder.matches(changePasswordRequest.getCurrentPassword(), currentUser.getPassword()) == false){
            throw new IncorrectPasswordException();
        }
        String passwordEncoded = passwordEncoder.encode(changePasswordRequest.getNewPassword());
        userProfileRepository.updatePassword(passwordEncoded);
        String token = jwtService.generateToken(currentUser);
        return token;
    }
}
