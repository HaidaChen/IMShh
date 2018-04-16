package com.douniu.imshh.sys.service;

import java.util.List;

import com.douniu.imshh.sys.domain.User;

public interface IUserService{
	List<User> query(User user);
	int count(User user);
	User findById(String id);
	void update(User user);
	void add(User user);
	void remove(String id);
	boolean verify(User user);
	boolean existUserName(String userName);
}
