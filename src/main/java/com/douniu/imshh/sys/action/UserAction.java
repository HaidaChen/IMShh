package com.douniu.imshh.sys.action;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.douniu.imshh.common.PageResult;
import com.douniu.imshh.sys.domain.Role;
import com.douniu.imshh.sys.domain.User;
import com.douniu.imshh.sys.service.IRoleService;
import com.douniu.imshh.sys.service.IUserService;
import com.google.gson.Gson;

@Controller
@RequestMapping("/user")
public class UserAction {
	
	@Autowired
	private IUserService service;
	@Autowired
	private IRoleService roleService;
	
	@RequestMapping("/main")
    public ModelAndView enter(){
        ModelAndView mav = new ModelAndView();
        mav.setViewName("/sys/userOverview");
        return mav;
    }
	
	@RequestMapping(value ="/loaduser", produces = "application/json; charset=utf-8")
	@ResponseBody
	public String loadUser(User user){
		List<User> res = service.query(user);
		int count = service.count(user);
		
		PageResult pr = new PageResult();
		
		pr.setTotal(count);
		pr.setRows(res);
		
		Gson gson = new Gson();
		return gson.toJson(pr);
	}
	
	@RequestMapping("/edit")
	public ModelAndView edit(User user){
		List<Role> roles = roleService.query();
		List<Role> userRoles = new ArrayList<>();	
		ModelAndView mav = new ModelAndView();
		if (!"".equals(user.getId()) && user.getId() != null){
			User oUser = service.findById(user.getId());
			mav.addObject("user", oUser);
			userRoles = roleService.queryByUser(user.getId());			
		}
		
		getFreeRoles(roles, userRoles);		
		mav.addObject("userRoles", userRoles);
		mav.addObject("roles", roles);		
        mav.setViewName("/sys/userEdit");
        return mav;
	}
	
	@RequestMapping("/save")
	public ModelAndView save(User user){
		if (!"".equals(user.getId()) && user.getId() != null){
			service.update(user);
		}else{
			service.add(user);
		}
		return enter();
	}	
	
	
	@RequestMapping("/delete")
	@ResponseBody
	public void delete(String id){
		service.remove(id);
	}
	
	@RequestMapping("/existUser")
	@ResponseBody
	public String existUser(String id, String userName){
		Map<String, Boolean> result = new HashMap<>();
		
		if (!"".equals(id)){
			User user = service.findById(id);
			if (userName.equals(user.getUserName())){
				result.put("valid", true);
			}else{
				result.put("valid", false);
			}
		}else{
			if(service.existUserName(userName)){
				result.put("valid", false);
			}else{
				result.put("valid", true);
			}
		}
				
		Gson gson = new Gson();
		return gson.toJson(result);
	}
	
	private void getFreeRoles(List<Role> allRole, List<Role> userRole){
		for (Role role : allRole){
			for (Role urole : userRole){
				if (role.getId().equals(urole)){
					allRole.remove(role);
				}				
			}
		}
	}
}
