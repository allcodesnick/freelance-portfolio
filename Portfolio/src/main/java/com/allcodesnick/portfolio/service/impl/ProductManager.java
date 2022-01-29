package com.allcodesnick.portfolio.service.impl;

import com.allcodesnick.portfolio.model.Product;
import com.allcodesnick.portfolio.repository.ProductRepository;
import com.allcodesnick.portfolio.service.ProductService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductManager implements ProductService {

    private ProductRepository productRepository;

    public ProductManager(ProductRepository productRepository) {
        super();
        this.productRepository = productRepository;
    }

    @Override
    public Product create_new_product(Product product) {
        return null;
    }

    @Override
    public List<Product> list_all_products() {
        return null;
    }

    @Override
    public Product find_product_by_id(long id) {
        return null;
    }
}
