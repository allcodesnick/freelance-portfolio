package com.allcodesnick.portfolio.controller.admin;

import com.allcodesnick.portfolio.model.Product;
import com.allcodesnick.portfolio.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/user")
public class ProductController {

    private ProductService productService;

    public ProductController(ProductService productService) {
        super();
        this.productService = productService;
    }

    @GetMapping("/services")
    public List<Product> getServicesProvidedList(){
        return productService.listProducts();
    }

    @PostMapping("/services")
    public Product createServiceProvided(@RequestBody Product product){
        return productService.saveProduct(product);
    }

}
