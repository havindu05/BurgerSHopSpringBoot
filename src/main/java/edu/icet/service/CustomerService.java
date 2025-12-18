package edu.icet.service;

import edu.icet.model.entity.Customer;
import edu.icet.repository.CustomerRepositroy;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class CustomerService {

    @Autowired
    CustomerRepositroy customerRepositroy;

    public Customer save(Customer customer) {
       return customerRepositroy.save(customer);
    }

    public List<Customer> getCustomers() {
        return customerRepositroy.findAll();
    }

    public void delete(String id) {
        customerRepositroy.deleteById(id);
    }
}
