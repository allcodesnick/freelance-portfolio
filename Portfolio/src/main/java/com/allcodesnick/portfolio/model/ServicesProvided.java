package com.allcodesnick.portfolio.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Data
@Entity
public class ServicesProvided {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(length = 45)
    private String serviceName;

    @Column(length = 400)
    private String serviceDescription;

    @Column(precision=16, scale=2)
    private double servicePrice;

    private java.sql.Date expectedDuration;

    @OneToMany(mappedBy = "servicesProvided")
    private Set<OrderRequest> request;

}
