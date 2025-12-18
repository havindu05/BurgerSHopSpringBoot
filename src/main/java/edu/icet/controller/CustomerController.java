package edu.icet.controller;

import edu.icet.model.entity.Customer;
import edu.icet.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customers")
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @PostMapping("/save")
    public Customer save(@RequestBody Customer customer){
        return customerService.save(customer);
    }

    @GetMapping("/all")
    public List<Customer> getCustomers(){
        return customerService.getCustomers();
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id){
        customerService.delete(id);
    }


}
