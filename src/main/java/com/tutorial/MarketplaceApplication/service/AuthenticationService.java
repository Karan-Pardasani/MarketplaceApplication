package com.tutorial.MarketplaceApplication.service;

import com.tutorial.MarketplaceApplication.dao.request.SignUpRequest;
import com.tutorial.MarketplaceApplication.dao.request.SigninRequest;
import com.tutorial.MarketplaceApplication.dao.response.JwtAuthenticationResponse;

public interface AuthenticationService {
    JwtAuthenticationResponse signup(SignUpRequest request);

    JwtAuthenticationResponse signin(SigninRequest request);
}