package com.allcodesnick.portfolio.model;

import lombok.Data;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String username;

    private String password;

    private boolean active;

    @ManyToMany(mappedBy = "user")
    private Set<UserRoles> userRoles;

    @OneToOne(mappedBy = "user")
    private Client client;

}
