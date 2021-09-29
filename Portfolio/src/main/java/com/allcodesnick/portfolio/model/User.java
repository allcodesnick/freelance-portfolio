package com.allcodesnick.portfolio.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String username;

    private String password;

    @Enumerated(EnumType.ORDINAL)
    private Roles roles;

    private boolean isEnabled;

    private boolean isAccountNonExpired;

    private boolean isAccountNonLocked;

    private boolean isCredentialsNonExpired;

    @OneToOne(mappedBy = "user")
    private Client client;

}
