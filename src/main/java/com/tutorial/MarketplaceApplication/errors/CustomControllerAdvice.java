package com.tutorial.MarketplaceApplication.errors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.io.PrintWriter;
import java.io.StringWriter;

@ControllerAdvice
public class CustomControllerAdvice {

    @ExceptionHandler(AuthenticationException.class)
    public ResponseEntity<ErrorResponse> handleAuthenticationExceptions(Exception e){
        return new ResponseEntity<>(
                ErrorResponse
                        .builder()
                        .status(HttpStatus.UNAUTHORIZED.name())
                        .message("Username or Password is incorrect.")
                        .build(), HttpStatus.UNAUTHORIZED
        );
    }

    @ExceptionHandler(CustomErrorException.class)
    public ResponseEntity<ErrorResponse> handleCustomErrorExceptions(Exception e){
        CustomErrorException customErrorException = (CustomErrorException) e;

        HttpStatus status = customErrorException.getStatus();

        StringWriter stringWriter = new StringWriter();
        PrintWriter printWriter = new PrintWriter(stringWriter);
        customErrorException.printStackTrace(printWriter);
        String stackTrace = stringWriter.toString();

        return new ResponseEntity<>(
                ErrorResponse
                        .builder()
                        .status(status.name())
                        .message(customErrorException.getMessage())
                        .stackTrace(stackTrace)
                        .data(customErrorException.getData())
                        .build(), status);
     }


     // fallback methods
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleExceptions(Exception e){
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

        StringWriter stringWriter = new StringWriter();
        PrintWriter printWriter = new PrintWriter(stringWriter);
        e.printStackTrace(printWriter);
        String stackTrace = stringWriter.toString();

        return new ResponseEntity<>(
                ErrorResponse
                        .builder()
                        .status(status.name())
                        .message(e.getMessage())
                        .stackTrace(stackTrace)
                        .build(),
                        status
                );
    }

}
