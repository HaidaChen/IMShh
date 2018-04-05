package com.douniu.imshh.finance.purchase.domain;

import java.util.Date;

public class DeliverDetail {
	private String id;
	
	private String planId;              /*关联采购计划*/
	private String planIdentify;        /*关联采购计划*/
	
	private String purchaseDetailId;    /*关联采购计划*/
	private String supplierId;          /*供应商ID*/
	private String supplierName;        /*供应商*/
	private String materialName;        /*原材料名称*/
	private String materialId;          /*原材料ID*/
	private String specification;       /*规格*/
	private String unit;                /*单位*/
	
	private int amount;                 /*交付数量*/
	private Date deliverDate;           /*交付日期*/
	
	private String remark;
	private int status = 1;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPlanId() {
		return planId;
	}
	public void setPlanId(String planId) {
		this.planId = planId;
	}
	public String getPlanIdentify() {
		return planIdentify;
	}
	public void setPlanIdentify(String planIdentify) {
		this.planIdentify = planIdentify;
	}
	public String getPurchaseDetailId() {
		return purchaseDetailId;
	}
	public void setPurchaseDetailId(String purchaseDetailId) {
		this.purchaseDetailId = purchaseDetailId;
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
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public Date getDeliverDate() {
		return deliverDate;
	}
	public void setDeliverDate(Date deliverDate) {
		this.deliverDate = deliverDate;
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
		return "DeliverDetail [id=" + id + ", planId=" + planId + ", planIdentify=" + planIdentify
				+ ", purchaseDetailId=" + purchaseDetailId + ", supplierId=" + supplierId + ", supplierName="
				+ supplierName + ", materialName=" + materialName + ", materialId=" + materialId + ", specification="
				+ specification + ", unit=" + unit + ", amount=" + amount + ", deliverDate=" + deliverDate + ", remark="
				+ remark + ", status=" + status + "]";
	}
	
}
