package com.tutorial.MarketplaceApplication.errors;

import org.springframework.http.HttpStatus;

public class IncorrectPasswordException extends RuntimeException {
    private HttpStatus status;

    private Object data = null;

    public IncorrectPasswordException(){
        super();
    }

    public IncorrectPasswordException(String message) {
        super(message);
    }

    public IncorrectPasswordException(HttpStatus status, String message) {
        this(message);
        this.status = status;
    }

    public IncorrectPasswordException(HttpStatus status, String message, Object data) {
        this( status, message);
        this.data = data;
    }


}
