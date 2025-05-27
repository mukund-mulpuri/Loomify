package com.loomify.model;

import jakarta.persistence.*;

@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long eid;
    private String name;
    private String contact;
    private String role;
    private String gender;

    @ManyToOne
    @JoinColumn(name = "store_id")
    private Store store;

    // Getters and Setters
}