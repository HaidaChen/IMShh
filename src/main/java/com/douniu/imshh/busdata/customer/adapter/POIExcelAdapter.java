package com.douniu.imshh.busdata.customer.adapter;

import java.beans.IntrospectionException;
import java.lang.reflect.InvocationTargetException;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.apache.poi.ss.usermodel.Workbook;

import com.douniu.imshh.busdata.customer.domain.Customer;
import com.douniu.imshh.utils.ExcelBean;
import com.douniu.imshh.utils.ExcelUtil;

public class POIExcelAdapter {
	private static List<ExcelBean> mapper = new ArrayList<ExcelBean>();
	
	static{
		mapper.add(new ExcelBean("��˾����","name",0));  
		mapper.add(new ExcelBean("��˾��ַ","address",0));  
		mapper.add(new ExcelBean("��ϵ�绰","phone",0));   
		mapper.add(new ExcelBean("����","email",0));  
		mapper.add(new ExcelBean("����","fax",0));  
		mapper.add(new ExcelBean("��ϵ��","contacts",0));  
		mapper.add(new ExcelBean("��ע","remark",0));  
	}
	
	public static Workbook toWorkBook(List<Customer> customers) throws IllegalArgumentException, IllegalAccessException, InvocationTargetException, ClassNotFoundException, IntrospectionException, ParseException{
		Map<Integer,List<ExcelBean>>map=new LinkedHashMap<>();  
        map.put(0, mapper);  
        return ExcelUtil.createExcelFile(Customer.class, customers, map, "Ӧ���˿���Ϣ");  
	}
	
	public static List<Customer> toCustomerList(List<List<Object>> data){
		List<Customer> customers = new ArrayList<Customer>();
		for (List<Object> obj : data){
			Customer customer = new Customer();
			customer.setName(String.valueOf(obj.get(0)));
			customer.setAddress(String.valueOf(obj.get(1)));
			customer.setPhone(String.valueOf(obj.get(2)));
			customer.setEmail(String.valueOf(obj.get(3)));
			customer.setFax(String.valueOf(obj.get(4)));
			customer.setContacts(String.valueOf(obj.get(5)));
			customer.setRemark(String.valueOf(obj.get(6)));
			customers.add(customer);
		}
		return customers;
	}
}
