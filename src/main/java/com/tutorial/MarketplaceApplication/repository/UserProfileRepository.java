package com.tutorial.MarketplaceApplication.repository;

import com.tutorial.MarketplaceApplication.dto.UserProfileDTO;
import com.tutorial.MarketplaceApplication.entities.User;
import com.tutorial.MarketplaceApplication.errors.DuplicateUserException;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.Option;
import java.util.Optional;

@Repository
public class UserProfileRepository{

    private UserRepository userRepository;

    public UserProfileRepository(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public Optional<UserProfileDTO> updateUserProfile(UserProfileDTO userProfileDTO) {

        User currentUser = (User)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Optional<User> user = this.userRepository.findByEmail(userProfileDTO.getEmail());
        if(user.isPresent()) {
            throw new DuplicateUserException(HttpStatus.BAD_REQUEST, "The email address is already in use for a different account");
        }

        if (userProfileDTO.getFirstname() != null)
            currentUser.setFirstname(userProfileDTO.getFirstname());
        if (userProfileDTO.getLastname() != null)
            currentUser.setLastname(userProfileDTO.getLastname());
        if (userProfileDTO.getEmail() != null)
            currentUser.setEmail(userProfileDTO.getEmail());
        if (userProfileDTO.getStreetAddress() != null)
            currentUser.setStreetAddress(userProfileDTO.getStreetAddress());
        if (userProfileDTO.getCity() != null)
            currentUser.setCity(userProfileDTO.getCity());
        if (userProfileDTO.getState() != null)
            currentUser.setState(userProfileDTO.getState());
        if (userProfileDTO.getZipCode() != null)
            currentUser.setZipCode(userProfileDTO.getZipCode());
        this.userRepository.save(currentUser);
        Optional<UserProfileDTO> response = Optional.of(new UserProfileDTO(currentUser));
        return response;
    }
}
