package com.allcodesnick.portfolio.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String username;

    private String password;

    private boolean active;
/*
    @OneToMany(mappedBy = "user")
 */
    private String roles;

    @OneToOne(mappedBy = "user")
    private Client client;

}
