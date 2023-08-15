package com.tutorial.MarketplaceApplication.auth;

import com.tutorial.MarketplaceApplication.entities.Role;
import com.tutorial.MarketplaceApplication.entities.User;
import com.tutorial.MarketplaceApplication.errors.CustomErrorException;
import com.tutorial.MarketplaceApplication.repository.UserRepository;
import com.tutorial.MarketplaceApplication.service.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository repository;

    private final PasswordEncoder passwordEncoder;

    private final JwtService jwtService;

    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
        var user = User.builder()
                .firstname(request.getFirstName())
                .lastname(request.getLastName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();
        var user2  = repository.findByEmail(request.getEmail());
        user2.ifPresentOrElse(
                (user3) -> {
                    throw new CustomErrorException(HttpStatus.CONFLICT, "User already present");
                },
                () -> {
                    repository.save(user);
                }
        );
//        if(repository.findByEmail(request.getEmail()) != null){
//            throw new CustomErrorException(
//                    HttpStatus.CONFLICT,
//                    "User already present!!"
//                    );
//        }

        repository.save(user);

        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {

        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
                request.getEmail(),
                request.getPassword()
        );

        authenticationManager.authenticate(usernamePasswordAuthenticationToken);

        var user = repository.findByEmail(request.getEmail())
                .orElseThrow();

        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
}
