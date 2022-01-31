package com.allcodesnick.portfolio.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;

    private String product_name;

    @Enumerated(EnumType.ORDINAL)
    private Status product_status;

    private String product_description;

    private double product_price;

    private int product_timeline;


}
