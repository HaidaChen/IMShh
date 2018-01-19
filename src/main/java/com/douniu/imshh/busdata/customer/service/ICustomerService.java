package com.douniu.imshh.busdata.customer.service;

import java.util.List;

import com.douniu.imshh.busdata.customer.domain.Customer;

public interface ICustomerService {
	List<Customer> query(Customer customer);
	int count(Customer customer);
	Customer getById(String id);
	void save(Customer customer);
	void delete(String id);
}
