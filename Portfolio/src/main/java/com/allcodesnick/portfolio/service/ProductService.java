package com.allcodesnick.portfolio.service;

import com.allcodesnick.portfolio.model.Product;

import java.util.List;

public interface ProductService {

    Product create_new_product(Product product);

    List<Product> list_all_products();

    Product find_product_by_id(long id);

}
