package com.douniu.imshh.finance.purchase.domain;

import java.util.Date;

import com.douniu.imshh.common.BaseQO;

public class Purchase extends BaseQO{
	private String id;    
	private String identify;
	private String orderId;
	private String orderIdentify;
	private Date purchaseDate;          /*采购日期*/

	private float amount;               /*金额*/
	private float paid;                 /*已支付*/
	private float balance;              /*余额*/
	
	private String remark;
	private int status = 1;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public Date getPurchaseDate() {
		return purchaseDate;
	}
	public void setPurchaseDate(Date purchaseDate) {
		this.purchaseDate = purchaseDate;
	}
	
	public float getAmount() {
		return amount;
	}
	public void setAmount(float amount) {
		this.amount = amount;
	}
	public float getPaid() {
		return paid;
	}
	public void setPaid(float paid) {
		this.paid = paid;
	}
	public float getBalance() {
		return balance;
	}
	public void setBalance(float balance) {
		this.balance = balance;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}	
	public String getIdentify() {
		return identify;
	}
	public void setIdentify(String identify) {
		this.identify = identify;
	}
	public String getOrderId() {
		return orderId;
	}
	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}
	public String getOrderIdentify() {
		return orderIdentify;
	}
	public void setOrderIdentify(String orderIdentify) {
		this.orderIdentify = orderIdentify;
	}
	@Override
	public String toString() {
		return "Purchase [id=" + id + ", identify=" + identify + ", orderId=" + orderId + ", orderIdentify="
				+ orderIdentify + ", purchaseDate=" + purchaseDate + ", amount=" + amount + ", paid=" + paid
				+ ", balance=" + balance + ", remark=" + remark + ", status=" + status + "]";
	}
	
	
}
