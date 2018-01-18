package com.douniu.imshh.busdata.customer.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.douniu.imshh.busdata.customer.domain.Customer;
import com.douniu.imshh.busdata.customer.service.ICustomerService;


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
}
