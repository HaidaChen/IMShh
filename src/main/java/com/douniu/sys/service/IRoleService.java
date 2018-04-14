package com.douniu.sys.service;

import java.util.List;

import com.douniu.sys.domain.Role;

public interface IRoleService {
	List<Role> query(Role role);
	int count(Role role);
	Role findById(String id);
	void update(Role role);
	void add(Role role);
	void delete(String id);
	
	List<Role> getUserRoles(String userId);
}
