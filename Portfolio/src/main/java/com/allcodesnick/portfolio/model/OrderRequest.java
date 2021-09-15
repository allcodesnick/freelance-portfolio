package com.allcodesnick.portfolio.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Calendar;
import java.util.Set;

@Data
@Entity
public class OrderRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    private ServicesProvided servicesProvided;

    private boolean freelancesResponse;

    @Temporal(TemporalType.TIMESTAMP)
    private Calendar dateRequested;

    private java.sql.Date requestedCompletionDate;

    @OneToOne
    private Client client;

    @OneToMany(mappedBy = "orderRequest")
    private Set<Document> documents;

    @OneToOne(mappedBy = "orderRequest")
    private OrderStatus orderStatus;
}
