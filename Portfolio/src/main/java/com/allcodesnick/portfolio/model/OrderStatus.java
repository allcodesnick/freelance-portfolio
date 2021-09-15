package com.allcodesnick.portfolio.model;

import lombok.Data;
import org.hibernate.annotations.Type;

import javax.persistence.*;

@Data
@Entity
public class OrderStatus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    //Completed || In progress
    @Type(type = "yes_no")
    private boolean completed;

    @OneToOne
    private OrderRequest orderRequest;
}
