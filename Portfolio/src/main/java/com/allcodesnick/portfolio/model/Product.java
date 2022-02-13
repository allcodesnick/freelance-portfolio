package com.allcodesnick.portfolio.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;

    private String productName;

    @Enumerated(EnumType.ORDINAL)
    private Status productStatus;

    private String productDescription;

    private double productPrice;

    private int productTimeline;


}
