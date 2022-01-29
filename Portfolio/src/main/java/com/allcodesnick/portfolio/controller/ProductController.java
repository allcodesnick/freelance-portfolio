package com.allcodesnick.portfolio.controller;

import com.allcodesnick.portfolio.model.Product;
import com.allcodesnick.portfolio.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    private ProductService product_service;

    public ProductController(ProductService productService) {
        super();
        this.product_service = productService;
    }

    @GetMapping("/{id}")
    public Product getProduct(@PathVariable long id){
        return product_service.findProductById(id);
    }

    @GetMapping("/view_products")
    public List<Product> getAllProducts(){
        return product_service.listAllProducts();
    }


    @PostMapping("/add")
    public Product saveNewProduct(@RequestBody Product product){
        return product_service.createNewProduct(product);
    }

}
