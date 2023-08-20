package com.tutorial.MarketplaceApplication.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;

    @PostMapping("/register")
    public ResponseEntity<?> register(
            @RequestBody RegisterRequest request
    ){
        if(request.getEmail() == null || request.getPassword() == null){
            return ResponseEntity.badRequest().body("Email Address and Password is required");
        }

        return ResponseEntity.ok(service.register(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> register(
            @RequestBody AuthenticationRequest request
    ){
        if(request.getEmail() == null || request.getPassword() == null){
            return ResponseEntity.badRequest().body("Email Address and Password is required");
        }

        return ResponseEntity.ok(service.authenticate(request));
    }

}
