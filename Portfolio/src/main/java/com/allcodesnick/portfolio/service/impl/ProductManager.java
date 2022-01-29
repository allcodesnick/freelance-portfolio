package com.allcodesnick.portfolio.service.impl;

import com.allcodesnick.portfolio.exception.ResourceNotFoundException;
import com.allcodesnick.portfolio.model.Product;
import com.allcodesnick.portfolio.repository.ProductRepository;
import com.allcodesnick.portfolio.service.ProductService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductManager implements ProductService {

    private ProductRepository product_repository;

    public ProductManager(ProductRepository productRepository) {
        super();
        this.product_repository = productRepository;
    }

    @Override
    public Product createNewProduct(Product product) {
        return product_repository.save(product);
    }

    @Override
    public List<Product> listAllProducts() {
        return product_repository.findAll();
    }

    @Override
    public Product findProductById(long id) {
        return product_repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Product", "Id", id));
    }
}
