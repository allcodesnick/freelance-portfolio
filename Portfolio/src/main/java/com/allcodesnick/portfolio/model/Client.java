package com.allcodesnick.portfolio.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    private String email;

    @Column(length = 200)
    private String clientDescription;

    @Column(length = 10, nullable = false)
    private String phoneNumber;

    @OneToOne
    private OrderRequest orderRequest;
}
