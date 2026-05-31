package pu.fmi.webprogramming.contoller.rest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pu.fmi.webprogramming.model.Customer;
import pu.fmi.webprogramming.service.customer.CustomerServiceInterface;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
@CrossOrigin("http://localhost:5173/")
public class CustomerApi {

    private final CustomerServiceInterface customerServiceInterface;

    public CustomerApi(CustomerServiceInterface customerServiceInterface) {
        this.customerServiceInterface = customerServiceInterface;
    }

    @GetMapping
    public List<Customer> getCustomers() {
        return customerServiceInterface.getAll();
    }
}
