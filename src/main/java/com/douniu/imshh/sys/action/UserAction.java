package com.douniu.imshh.sys.action;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.douniu.imshh.common.PageResult;
import com.douniu.imshh.sys.service.IUserService;
import com.douniu.sys.domain.User;
import com.google.gson.Gson;

@Controller
@RequestMapping("/user")
public class UserAction {
	
	@Autowired
	private IUserService service;
	
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
		ModelAndView mav = new ModelAndView();
		if (!"".equals(user.getId()) && user.getId() != null){
			User oUser = service.findById(user.getId());
			mav.addObject("user", oUser);
		}
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
	  
}
