package com.loomify.model;

import jakarta.persistence.*;

@Entity
public class Brand {
    @Id
    private String brandName;
    private String type;
    private String size;
    private int quantity;

    @ManyToOne
    @JoinColumn(name = "store_id")
    private Store store;

    // Getters and Setters
}