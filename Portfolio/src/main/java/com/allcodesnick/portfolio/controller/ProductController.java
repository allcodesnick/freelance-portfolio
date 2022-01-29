package com.allcodesnick.portfolio.controller;

import com.allcodesnick.portfolio.service.ProductService;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {

    private ProductService productService;

    public ProductController(ProductService productService) {
        super();
        this.productService = productService;
    }


}
