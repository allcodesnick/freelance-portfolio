package com.allcodesnick.portfolio.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class ServicesProvided {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(length = 45)
    private String serviceName;

    @Column(length = 400)
    private String ServiceDescription;

    @Column(precision=16, scale=2)
    private double ServicePrice;

    private java.sql.Date expectedDuration;

}
