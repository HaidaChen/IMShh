package com.douniu.imshh.finance.purchase.domain;

import java.util.Date;

import com.douniu.imshh.common.BaseQO;

public class Purchase extends BaseQO{
	private String id;                 
	private Date purchaseDate;          /*采购日期*/
	private String supplierId;          /*供应商ID*/
	private String supplierName;        /*供应商名称*/
	private String materialName;        /*原材料名称*/
	private String materialId;          /*原材料ID*/
	private String specification;       /*规格*/
	private String unit;                /*单位*/
	private int quantity;               /*数量*/
	private float unitPrice;            /*单价*/
	private float totlemnt;             /*合计*/
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
	public String getSupplierId() {
		return supplierId;
	}
	public void setSupplierId(String supplierId) {
		this.supplierId = supplierId;
	}
	public String getSupplierName() {
		return supplierName;
	}
	public void setSupplierName(String supplierName) {
		this.supplierName = supplierName;
	}
	public String getMaterialName() {
		return materialName;
	}
	public void setMaterialName(String materialName) {
		this.materialName = materialName;
	}
	public String getMaterialId() {
		return materialId;
	}
	public void setMaterialId(String materialId) {
		this.materialId = materialId;
	}
	public String getSpecification() {
		return specification;
	}
	public void setSpecification(String specification) {
		this.specification = specification;
	}
	public String getUnit() {
		return unit;
	}
	public void setUnit(String unit) {
		this.unit = unit;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public float getUnitPrice() {
		return unitPrice;
	}
	public void setUnitPrice(float unitPrice) {
		this.unitPrice = unitPrice;
	}
	public float getTotlemnt() {
		return totlemnt;
	}
	public void setTotlemnt(float totlemnt) {
		this.totlemnt = totlemnt;
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
	@Override
	public String toString() {
		return "Purchase [id=" + id + ", purchaseDate=" + purchaseDate + ", supplierId=" + supplierId
				+ ", supplierName=" + supplierName + ", materialName=" + materialName + ", materialId=" + materialId
				+ ", specification=" + specification + ", unit=" + unit + ", quantity=" + quantity + ", unitPrice="
				+ unitPrice + ", totlemnt=" + totlemnt + ", paid=" + paid + ", balance=" + balance + ", remark="
				+ remark + ", status=" + status + "]";
	}
	
	
	
}
