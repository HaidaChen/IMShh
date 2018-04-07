package com.douniu.imshh.finance.purchase.action;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.douniu.imshh.common.PageResult;
import com.douniu.imshh.finance.purchase.domain.PurchaseDetail;
import com.douniu.imshh.finance.purchase.domain.PurchasePlan;
import com.douniu.imshh.finance.purchase.service.IPurchaseDetailService;
import com.douniu.imshh.finance.purchase.service.IPurchaseService;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@Controller
@RequestMapping("/purchase")
public class PurchaseAction {
	
	@Autowired
	private IPurchaseService service;
	@Autowired
	private IPurchaseDetailService dService;
	
	@RequestMapping("/main")
    public ModelAndView enter(PurchasePlan purchase){
        ModelAndView mav = new ModelAndView();
        mav.setViewName("/finance/purchase/overview");
        return mav;
    }
	
	@RequestMapping("/edit")
	public ModelAndView edit(PurchasePlan purchase){
		ModelAndView mav = new ModelAndView();
		if (purchase.getId() != ""){
			PurchasePlan oPurchase = service.getById(purchase.getId());
			mav.addObject("purchase", oPurchase);
		}
        mav.setViewName("/finance/purchase/edit");
        return mav;
	}
	
	@RequestMapping("/save")
	public ModelAndView save(PurchasePlan purchase){
		service.save(purchase);
        return enter(purchase);		
	}
	
	@RequestMapping(value ="/loadpurchase", produces = "application/json; charset=utf-8")
	@ResponseBody
	public String loadPurchase(PurchasePlan purchase){
		List<PurchasePlan> res = service.query(purchase);
		int count = service.count(purchase);
		
		PageResult pr = new PageResult();
		
		pr.setTotal(count);
		pr.setRows(res);
		
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
		return gson.toJson(pr);
	}
	
	@RequestMapping(value ="/loadPurchaseDetail", produces = "application/json; charset=utf-8")
	@ResponseBody
	public String loadPurchaseDetail(String planId){
		List<PurchaseDetail> details = dService.queryByPlan(planId);		
		Gson gson = new Gson();
		return gson.toJson(details);
	}
	
	@RequestMapping("/delete")
	@ResponseBody
	public void delete(String id){
		service.delete(id);
	}
	
}
