package com.douniu.imshh.busdata.customer.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.douniu.imshh.busdata.customer.domain.Customer;
import com.douniu.imshh.busdata.customer.service.ICustomerService;


@Controller
public class CustomerAction {
	
	@Autowired
	private ICustomerService service;
	
	@RequestMapping("/cust/main")
    public ModelAndView enter(Customer cust){
        ModelAndView mav = new ModelAndView();
        mav.setViewName("WEB-INF/jsp/cust/customerMain");
        return mav;
    }
}
