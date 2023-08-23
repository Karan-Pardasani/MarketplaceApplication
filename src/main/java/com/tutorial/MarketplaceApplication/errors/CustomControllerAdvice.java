package com.tutorial.MarketplaceApplication.errors;

import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
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
        HttpStatus status = HttpStatus.UNAUTHORIZED;
        return new ResponseEntity<>(
                ErrorResponse
                        .builder()
                        .status(status.name())
                        .code(status.value())
                        .message("Username or Password is incorrect.")
                        .build(), status
        );
    }

    @ExceptionHandler(IncorrectPasswordException.class)
    public ResponseEntity<ErrorResponse> handleIncorrectPasswordExceptions(Exception e){
        HttpStatus status = HttpStatus.BAD_REQUEST;
        return new ResponseEntity<>(ErrorResponse
                .builder()
                .status(status.name())
                .code(status.value())
                .message("The current password you have entered is incorrect.")
                .build(), status);
    }

    @ExceptionHandler(ExpiredJwtException.class)
    public ResponseEntity<ErrorResponse> handleExpiredJwtExceptions(Exception e){
        ExpiredJwtException expiredJwtException = (ExpiredJwtException) e;
        HttpStatus status = HttpStatus.UNAUTHORIZED;
        return new ResponseEntity<>(
                ErrorResponse
                        .builder()
                        .status(status.name())
                        .code(status.value())
                        .message("Your session is expired. Please log in again.")
                        .build(),
                status);
    }

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleUserNotFoundExceptions(Exception e){
        UserNotFoundException userNotFoundException = (UserNotFoundException) e;
        HttpStatus status = userNotFoundException.getStatus();

        return new ResponseEntity<>(
                ErrorResponse
                        .builder()
                        .status(status.name())
                        .code(status.value())
                        .message(userNotFoundException.getMessage())
                        .data(userNotFoundException.getData())
                        .build(),
                status);
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
                        .code(status.value())
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
                        .code(status.value())
                        .message(e.getMessage())
                        .stackTrace(stackTrace)
                        .build(),
                        status
                );
    }

}
