package edu.icet.repository;

import edu.icet.model.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepositroy extends JpaRepository<Customer , String> {

}
