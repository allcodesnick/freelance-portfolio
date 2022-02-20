package com.allcodesnick.portfolio.controller;

import com.allcodesnick.portfolio.model.Product;
import com.allcodesnick.portfolio.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ProductController {

    private ProductService productService;

    public ProductController(ProductService productService) {
        super();
        this.productService = productService;
    }

    @GetMapping("/products/{id}")
    public Product getProductById(@PathVariable long id){
        return productService.findProductById(id);
    }


    @GetMapping("/products")
    public List<Product> getAllProducts(){
        return productService.listAllProducts();
    }

    @PostMapping("/products")
    public Product saveNewProduct(@RequestBody Product product){
        return productService.createNewProduct(product);
    }

    @DeleteMapping("/products/{id}")
    public void deleteProduct(@PathVariable long id){
        productService.deleteProduct(id);
    }

    
    @PutMapping("/products/{id}")
    public Product updateProduct(@PathVariable long id, @RequestBody Product product){
        return productService.updateProduct(id, product);
    }
}
