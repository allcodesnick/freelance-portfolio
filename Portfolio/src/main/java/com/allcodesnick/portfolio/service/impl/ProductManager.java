package com.allcodesnick.portfolio.service.impl;

import com.allcodesnick.portfolio.exception.ResourceNotFoundException;
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
    public Product createNewProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public List<Product> listAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product findProductById(long id) {
        return productRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Product", "Id", id));
    }

    @Override
    public void deleteProduct(long id) {
        Product product = productRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Product", "Id", id));
        productRepository.delete(product);
    }

    @Override
    public Product updateProduct(long id, Product product) {
        Product existingProduct = productRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Product", "Id", id));
        existingProduct.setProductName(product.getProductName());
        existingProduct.setProductStatus(product.getProductStatus());
        existingProduct.setProductDescription(product.getProductDescription());
        existingProduct.setProductPrice(product.getProductPrice());
        existingProduct.setProductTimeline(product.getProductTimeline());
        return productRepository.save(existingProduct);
    }
}
