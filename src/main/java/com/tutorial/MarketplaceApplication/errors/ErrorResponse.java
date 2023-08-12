package com.tutorial.MarketplaceApplication.errors;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

import java.util.Date;

@Getter
@Setter
@Builder
public class ErrorResponse {

    private Date timestamp;

    private int code;

    private String status;
    private String message;
    private String stackTrace;
    private Object data;

}
