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
    public Product saveProduct(Product product){
        return productRepository.save(product);
    }

    @Override
    public List<Product> listProducts(){
        return productRepository.findAll();
    }


    @Override
    public Product getProductsByID(long id){
        return productRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Product","ID", id));
    }

    @Override
    public void deleteProduct(long id){
        Product product = productRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Product","ID", id));
        productRepository.delete(product);
    }

    @Override
    public Product updateProduct(Product product, long id){
        Product existingServiceProvided = productRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Product","ID", id));
        existingServiceProvided.setProductName(product.getProductName());
        existingServiceProvided.setProductDescription(product.getProductDescription());
        existingServiceProvided.setProductPrice(product.getProductPrice());
        existingServiceProvided.setExpectedDuration(product.getExpectedDuration());
        return productRepository.save(existingServiceProvided);
    }
}
