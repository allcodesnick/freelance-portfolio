package com.allcodesnick.portfolio.service;

import com.allcodesnick.portfolio.model.Product;

import java.util.List;

public interface ProductService {

    Product createNewProduct(Product product);

    List<Product> listAllProducts();

    Product findProductById(long id);

}
