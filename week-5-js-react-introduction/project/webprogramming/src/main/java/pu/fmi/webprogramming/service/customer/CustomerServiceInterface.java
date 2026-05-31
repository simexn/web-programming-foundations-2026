package pu.fmi.webprogramming.service.customer;

import pu.fmi.webprogramming.model.Customer;

import java.util.List;

public interface CustomerServiceInterface {

    List<Customer> getAll();

    Customer getById(Long id);
}
