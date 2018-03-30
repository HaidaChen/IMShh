package com.douniu.imshh.finance.purchase.action;

import java.io.BufferedOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

import com.douniu.imshh.common.PageResult;
import com.douniu.imshh.finance.purchase.domain.Purchase;
import com.douniu.imshh.finance.purchase.service.IPurchaseService;
import com.douniu.imshh.utils.DateUtil;
import com.douniu.imshh.utils.ExcelBean;
import com.douniu.imshh.utils.ExcelUtil;
import com.douniu.imshh.utils.POIExcelAdapter;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@Controller
@RequestMapping("/purchase")
public class PurchaseAction {
	private static List<ExcelBean> mapper = new ArrayList<ExcelBean>();
	static{
		mapper.add(new ExcelBean("采购日期","purchaseDate",0));  
		mapper.add(new ExcelBean("品名","materialName",0));  
		mapper.add(new ExcelBean("供应商","supplierName",0));   
		mapper.add(new ExcelBean("规格","specification",0));  
		mapper.add(new ExcelBean("单位","unit",0));  
		mapper.add(new ExcelBean("数量","quantity",0));		
		mapper.add(new ExcelBean("单价","unitPrice",0));
		mapper.add(new ExcelBean("金额","totlemnt",0));
		mapper.add(new ExcelBean("付款","paid",0));
		mapper.add(new ExcelBean("余额","balance",0));		
		mapper.add(new ExcelBean("备注","remark",0));  
	}
	
	@Autowired
	private IPurchaseService service;
	
	@RequestMapping("/main")
    public ModelAndView enter(Purchase purchase){
        ModelAndView mav = new ModelAndView();
        mav.setViewName("/finance/purchase/overview");
        return mav;
    }
	
	@RequestMapping("/edit")
	public ModelAndView edit(Purchase purchase){
		ModelAndView mav = new ModelAndView();
		if (purchase.getId() != ""){
			Purchase oPurchase = service.getById(purchase.getId());
			mav.addObject("purchase", oPurchase);
		}
        mav.setViewName("/finance/purchase/edit");
        return mav;
	}
	
	@RequestMapping("/save")
	public ModelAndView save(Purchase purchase){
		service.save(purchase);
        return enter(purchase);
	}
	
	@RequestMapping(value ="/loadpurchase", produces = "application/json; charset=utf-8")
	@ResponseBody
	public String loadPurchase(Purchase purchase){
		List<Purchase> res = service.query(purchase);
		int count = service.count(purchase);
		
		PageResult pr = new PageResult();
		
		pr.setTotal(count);
		pr.setRows(res);
		
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
		return gson.toJson(pr);
	}
	
	@RequestMapping("/delete")
	@ResponseBody
	public void delete(String id){
		service.delete(id);
	}
	
	
	
    @ResponseBody  
    @RequestMapping(value="ajaxUpload",method={RequestMethod.GET,RequestMethod.POST})  
    public  void  ajaxUploadExcel(HttpServletRequest request,HttpServletResponse response) throws Exception {  
        MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;    
          
        InputStream in =null;  
        MultipartFile file = multipartRequest.getFile("upfile");  
        if(file.isEmpty()){  
            throw new Exception("文件不存在");  
        }  
          
        in = file.getInputStream();  
        List<List<Object>>  data = ExcelUtil.parseExcel(in, file.getOriginalFilename());
        List<Purchase> purchases = POIExcelAdapter.toDomainList(data, mapper, Purchase.class);
        service.batchAdd(purchases);
    }  
    
    @RequestMapping(value = "downloadExcel", method = RequestMethod.GET)  
    @ResponseBody  
    public void downloadExcel(HttpServletRequest request,HttpServletResponse response,HttpSession session){  
    	response.reset();  
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddhhmmssms");  
        String dateStr = sdf.format(new Date());  
         
        response.setHeader("Content-Disposition", "attachment;filename=" +dateStr+".xlsx");  
        response.setContentType("application/vnd.ms-excel;charset=UTF-8");  
        response.setHeader("Pragma", "no-cache");  
        response.setHeader("Cache-Control", "no-cache");  
        response.setDateHeader("Expires", 0);  
  
        Workbook workbook=null;  
        try {
        	String supplierName = request.getParameter("supplierName");
        	String materialName = request.getParameter("materialName");
        	Date startDate = DateUtil.string2Date(request.getParameter("startDate"));
        	Date endDate = DateUtil.string2Date(request.getParameter("endDate"));
        	
        	Purchase purchase = new Purchase();
        	//purchase.setSupplierName(supplierName);
        	//purchase.setMaterialName(materialName);
        	purchase.setStartDate(startDate);
        	purchase.setEndDate(endDate);
        	
            List<Purchase> purchases = service.queryNoPage(purchase);
        	workbook = POIExcelAdapter.toWorkBook(purchases, mapper, Purchase.class); 
        } catch (Exception e) {  
            e.printStackTrace();  
        }  
        OutputStream output;  
        try {  
            output = response.getOutputStream();  
          
            BufferedOutputStream bufferedOutPut = new BufferedOutputStream(output);  
            bufferedOutPut.flush();  
            workbook.write(bufferedOutPut);  
            bufferedOutPut.close();  
              
        } catch (IOException e) {  
            e.printStackTrace();  
        }  
    }  
    
    
}
