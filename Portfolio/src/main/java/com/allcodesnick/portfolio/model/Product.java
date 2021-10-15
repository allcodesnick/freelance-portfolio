package com.allcodesnick.portfolio.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Data
@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(length = 45)
    private String productName;

    @Column(length = 400)
    private String productDescription;

    @Column(precision=16, scale=2)
    private double productPrice;

    private java.sql.Date expectedDuration;

    @OneToMany(mappedBy = "product")
    private Set<OrderRequest> productRequests;

    // Add Order Request to Product

    public void addProductOrderRequest(OrderRequest orderRequest){
        productRequests.add(orderRequest);
    }

    // Delete Order Request
    public void deleteProductOrderRequest(OrderRequest orderRequest){
        productRequests.remove(orderRequest);
    }
}
