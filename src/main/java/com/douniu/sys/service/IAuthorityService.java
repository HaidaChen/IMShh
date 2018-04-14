package com.douniu.sys.service;

import java.util.List;

import com.douniu.sys.domain.Authority;

public interface IAuthorityService {
	List<Authority> queryByParentId(String parentId);
	Authority findById(String id);
	List<Authority> getRoleAuthorities(String roleId);
}
