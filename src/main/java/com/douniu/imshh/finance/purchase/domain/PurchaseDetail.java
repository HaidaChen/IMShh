package com.douniu.imshh.finance.purchase.domain;

public class PurchaseDetail {
	private String id;
	private String purchasesupplierId;  /*供应商ID*/
	private String materialName;        /*原材料名称*/
	private String materialId;          /*原材料ID*/
	private String specification;       /*规格*/
	private String unit;                /*单位*/
	private int quantity;               /*数量*/
	private float unitPrice;            /*单价*/
	private float totlemnt;             /*合计*/
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPurchasesupplierId() {
		return purchasesupplierId;
	}
	public void setPurchasesupplierId(String purchasesupplierId) {
		this.purchasesupplierId = purchasesupplierId;
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
	@Override
	public String toString() {
		return "PurchaseDetail [id=" + id + ", purchasesupplierId=" + purchasesupplierId + ", materialName="
				+ materialName + ", materialId=" + materialId + ", specification=" + specification + ", unit=" + unit
				+ ", quantity=" + quantity + ", unitPrice=" + unitPrice + ", totlemnt=" + totlemnt + "]";
	}	
}
