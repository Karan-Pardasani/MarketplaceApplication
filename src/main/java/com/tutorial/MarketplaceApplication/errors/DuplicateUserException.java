package com.tutorial.MarketplaceApplication.errors;

import lombok.*;
import org.springframework.http.HttpStatus;

@Getter
@Setter
@AllArgsConstructor
public class DuplicateUserException extends RuntimeException{
    private HttpStatus status = null;
    private Object data = null;
    public DuplicateUserException(){
        super();
    }

    public DuplicateUserException(String message) {
        super(message);
    }

    public DuplicateUserException(HttpStatus status, String message) {
        this(message);
        this.status = status;
    }

    public DuplicateUserException(HttpStatus status, String message, Object data) {
        this( status, message);
        this.data = data;
    }
}
