package com.loomify.model;

import jakarta.persistence.*;

@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String customerName;
    private String date;
    private String item;
    private double cost;

    @ManyToOne
    @JoinColumn(name = "bill_id")
    private Billing billing;

    // Getters and Setters
}