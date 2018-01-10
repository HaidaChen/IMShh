package com.douniu.imshh.busdata.customer.domain;

import java.util.Date;

import com.douniu.imshh.common.BaseQO;

public class Customer extends BaseQO{
	private String id;
	private String name;
	private String address;
	private String phone;
	private String eMail;
	private String fax;
	private String contacts;
	
	private Date createDate;
	private int status;
	
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String geteMail() {
		return eMail;
	}
	public void seteMail(String eMail) {
		this.eMail = eMail;
	}
	public String getFax() {
		return fax;
	}
	public void setFax(String fax) {
		this.fax = fax;
	}
	public String getContacts() {
		return contacts;
	}
	public void setContacts(String contacts) {
		this.contacts = contacts;
	}
	public Date getCreateDate() {
		return createDate;
	}
	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	
	@Override
	public String toString() {
		return "Customer [id=" + id + ", name=" + name + ", address=" + address + ", phone=" + phone + ", eMail="
				+ eMail + ", fax=" + fax + ", contacts=" + contacts + ", createDate=" + createDate + ", status="
				+ status + "]";
	}
	
	
	
}
