package com.loomify.model;

import jakarta.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
public class Billing {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long billId;
    private String customerContact;
    private Date date;

    @OneToMany(mappedBy = "billing")
    private List<Customer> customers;

    // Getters and Setters
}