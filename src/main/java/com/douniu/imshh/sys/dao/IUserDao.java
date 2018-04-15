package com.douniu.imshh.sys.dao;

import java.util.List;

import com.douniu.sys.domain.User;

public interface IUserDao {
	List<User> query(User user);
	int count(User user);
	User findById(String id);
	void insert(User user);
	void update(User user);
	void delete(String id);
	int countByNmPwd(User user);
}
