package com.allcodesnick.portfolio.model;

import lombok.Data;

import javax.persistence.*;


@Data
@Entity
public class Document {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String fileName;

    private String fileType;

    @Lob
    private byte[] data;

    @ManyToOne
    private OrderRequest orderRequest;

}
