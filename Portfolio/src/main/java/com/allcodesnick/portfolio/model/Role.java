package com.allcodesnick.portfolio.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String roleName;

    /*
    @ManyToOne
    private User user;

     */
}
