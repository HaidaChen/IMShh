package com.douniu.imshh.busdata.customer.service.impl;

import java.util.Date;
import java.util.List;

import com.douniu.imshh.busdata.customer.dao.ICustomerDao;
import com.douniu.imshh.busdata.customer.domain.Customer;
import com.douniu.imshh.busdata.customer.service.ICustomerService;

public class CustomerService implements ICustomerService{

	private ICustomerDao dao;
	
	public List<Customer> query(Customer customer) {
		// TODO Auto-generated method stub
		return dao.query(customer);
	}

	public Customer getById(String id) {
		// TODO Auto-generated method stub
		return dao.findById(id);
	}

	public void save(Customer customer) {
		// TODO Auto-generated method stub
		if (customer.getId().equals("")){
			customer.setId(System.currentTimeMillis()+"");
			customer.setCreateDate(new Date());
			customer.setStatus(1);
			dao.insert(customer);
		}else{
			dao.update(customer);
		}
	}

	public void delete(String id) {
		// TODO Auto-generated method stub
		dao.deleteById(id);
	}

	public ICustomerDao getDao() {
		return dao;
	}

	public void setDao(ICustomerDao dao) {
		this.dao = dao;
	}
	
}
