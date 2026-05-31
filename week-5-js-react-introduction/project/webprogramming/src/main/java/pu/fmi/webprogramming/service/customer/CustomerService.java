package pu.fmi.webprogramming.service.customer;

import org.springframework.stereotype.Service;
import pu.fmi.webprogramming.model.Customer;
import pu.fmi.webprogramming.repository.CustomerJpaRepository;

import java.util.List;

@Service
public class CustomerService implements CustomerServiceInterface {

    private final CustomerJpaRepository customerJpaRepository;

    public CustomerService(CustomerJpaRepository customerJpaRepository) {
        this.customerJpaRepository = customerJpaRepository;
    }

    @Override
    public List<Customer> getAll() {
        return customerJpaRepository.findAll();
    }

    @Override
    public Customer getById(Long id) {
        return customerJpaRepository.findById(id).orElse(null);
    }
}
