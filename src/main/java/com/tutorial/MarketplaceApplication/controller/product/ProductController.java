package com.tutorial.MarketplaceApplication.controller.product;

import com.tutorial.MarketplaceApplication.service.product.ProductService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/product")
public class ProductController {

    private ProductService productService;

//    ResponseEntity<ProductDTO> create(@RequestBody )
}
