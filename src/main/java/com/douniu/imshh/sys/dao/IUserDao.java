package com.douniu.imshh.sys.dao;

import java.util.List;

import com.douniu.imshh.sys.domain.RoleAuthority;
import com.douniu.imshh.sys.domain.User;

public interface IUserDao {
	List<User> query(User user);
	int count(User user);
	User findById(String id);
	void insert(User user);
	void update(User user);
	void delete(String id);
	int countByNmPwd(User user);
	
	void deleteRoleRelation(String userId);
	void addRoleRelation(List<RoleAuthority> roleAuthorities);
}
