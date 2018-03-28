package com.douniu.imshh.finance.account.domain;

import java.util.Date;

import com.douniu.imshh.common.BaseQO;

public class Transaction extends BaseQO{
	private String id;
	private String accountId;
	private Date tranDate;
	private int tranType;
	private float tranAmount;
	private float balance;
    
	private String tranUser; 
	private String tranBank;
	private String tranAccountNo;
    
	private String orderId;
	private String purchaseId;
    
    private String remark;
    private int status;
    
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getAccountId() {
		return accountId;
	}
	public void setAccountId(String accountId) {
		this.accountId = accountId;
	}
	public Date getTranDate() {
		return tranDate;
	}
	public void setTranDate(Date tranDate) {
		this.tranDate = tranDate;
	}
	public int getTranType() {
		return tranType;
	}
	public void setTranType(int tranType) {
		this.tranType = tranType;
	}
	public float getTranAmount() {
		return tranAmount;
	}
	public void setTranAmount(float tranAmount) {
		this.tranAmount = tranAmount;
	}
	public float getBalance() {
		return balance;
	}
	public void setBalance(float balance) {
		this.balance = balance;
	}
	public String getTranUser() {
		return tranUser;
	}
	public void setTranUser(String tranUser) {
		this.tranUser = tranUser;
	}
	public String getTranBank() {
		return tranBank;
	}
	public void setTranBank(String tranBank) {
		this.tranBank = tranBank;
	}
	public String getTranAccountNo() {
		return tranAccountNo;
	}
	public void setTranAccountNo(String tranAccountNo) {
		this.tranAccountNo = tranAccountNo;
	}
	public String getOrderId() {
		return orderId;
	}
	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}
	public String getPurchaseId() {
		return purchaseId;
	}
	public void setPurchaseId(String purchaseId) {
		this.purchaseId = purchaseId;
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
	
	@Override
	public String toString() {
		return "Transaction [id=" + id + ", accountId=" + accountId + ", tranDate=" + tranDate + ", tranType="
				+ tranType + ", tranAmount=" + tranAmount + ", balance=" + balance + ", tranUser=" + tranUser
				+ ", tranBank=" + tranBank + ", tranAccountNo=" + tranAccountNo + ", orderId=" + orderId
				+ ", purchaseId=" + purchaseId + ", remark=" + remark + ", status=" + status + "]";
	}
       
}
