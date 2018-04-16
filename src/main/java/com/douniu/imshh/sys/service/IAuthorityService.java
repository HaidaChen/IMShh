package com.douniu.imshh.sys.service;

import java.util.List;

import com.douniu.imshh.sys.domain.Authority;

public interface IAuthorityService {
	List<Authority> query();
	List<Authority> queryByRole(String roleId);
	Authority findById(String id);
}
