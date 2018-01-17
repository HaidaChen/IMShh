package com.douniu.imshh.busdata.customer.service;

import java.util.List;

import com.douniu.imshh.busdata.customer.domain.Customer;

public interface ICustomerService {
	List<Customer> query(Customer customer);
	Customer getById(String id);
	void add(Customer customer);
	void update(Customer customer);
	void delete(String id);
}
