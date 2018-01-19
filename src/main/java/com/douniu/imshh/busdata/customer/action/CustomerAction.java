package com.douniu.imshh.busdata.customer.action;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.douniu.imshh.busdata.customer.domain.Customer;
import com.douniu.imshh.busdata.customer.service.ICustomerService;
import com.douniu.imshh.common.PageResult;
import com.google.gson.Gson;


@Controller
@RequestMapping("/cust")
public class CustomerAction {
	
	@Autowired
	private ICustomerService service;
	
	@RequestMapping("/main")
    public ModelAndView enter(Customer cust){
        ModelAndView mav = new ModelAndView();
        mav.setViewName("/busdata/cust/overview");
        return mav;
    }
	
	@RequestMapping("/edit")
	public ModelAndView edit(Customer cust){
		ModelAndView mav = new ModelAndView();
        mav.setViewName("/busdata/cust/edit");
        return mav;
	}
	
	@RequestMapping("/save")
	public ModelAndView save(Customer cust){
		service.save(cust);
        return enter(cust);
	}
	
	@RequestMapping(value ="/loadcust", produces = "application/json; charset=utf-8")
	@ResponseBody
	public String loadCustomer(Customer cust){
		List<Customer> res = service.query(cust);
		int count = service.count(cust);
		PageResult pr = new PageResult();
		pr.setResult(res);
		pr.setResultCount(count);
		Gson gson = new Gson();
        String resJson = gson.toJson(pr);
		return resJson;
	}
}
