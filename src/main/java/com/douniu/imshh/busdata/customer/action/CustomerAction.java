package com.douniu.imshh.busdata.customer.action;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.douniu.imshh.busdata.customer.domain.Customer;
import com.douniu.imshh.busdata.customer.service.ICustomerService;
import com.douniu.imshh.common.PageResult;
import com.douniu.imshh.utils.ExcelImportUtil;
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
		if (cust.getId() != ""){
			Customer customer = service.getById(cust.getId());
			mav.addObject("cust", customer);
		}
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
	
	@RequestMapping("/delete")
	@ResponseBody
	public void delete(String id){
		service.delete(id);
	}
	
	@RequestMapping("/import")
	@ResponseBody
	public String importCustomer(@RequestParam(value = "excelFile") MultipartFile excelFile,
			HttpServletRequest request) throws IOException{
		if (null == excelFile) {  
            return "模板文件为空,请选择文件";  
        }  
		
		/*String path = request.getSession().getServletContext().getRealPath("IMShh"); 
		File dir = new File(path);  
        if(!dir.exists()) {  
            dir.mkdirs();  
        } */ 
        //String fileName = excelFile.getOriginalFilename();//report.xls  
        //String fileName2 = excelFile.getName();//excelFile  
          
        InputStream fis = excelFile.getInputStream();  
        List<Map<String, String>>  data = ExcelImportUtil.parseExcel(fis);  
        
        return "success";  
	}
}
