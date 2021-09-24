package com.allcodesnick.portfolio.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Data
@Entity
public class UserRoles {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String role;

    @ManyToMany
    private Set<User> user;

}
