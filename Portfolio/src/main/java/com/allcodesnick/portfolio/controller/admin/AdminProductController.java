package com.allcodesnick.portfolio.controller.admin;

import com.allcodesnick.portfolio.model.Product;
import com.allcodesnick.portfolio.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/admin/products")
public class AdminProductController {

    private ProductService productService;

    public AdminProductController(ProductService productService) {
        super();
        this.productService = productService;
    }

    @GetMapping("/list-products")
    public List<Product> getServicesProvidedList(){
        return productService.listProducts();
    }

    @DeleteMapping("/delete-product/{id}")
    public void deleteProduct(@PathVariable long id){
        productService.deleteProduct(id);
    }

    @PostMapping("/create-product")
    public Product createProduct(@RequestBody Product product){
        return productService.createProduct(product);
    }

    @PutMapping("/update-product/{id}")
    public Product updateProduct(@RequestBody Product product, @PathVariable long id){
        return productService.updateProduct(product, id);
    }

    @GetMapping("/view-product/{id}")
    public Product viewProduct(@PathVariable long id){
        return productService.getProductsByID(id);
    }

}
