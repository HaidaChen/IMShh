package com.douniu.imshh.finance.purchase.dao;

import java.util.List;

import com.douniu.imshh.finance.purchase.domain.Purchase;

public interface IPurchaseDao {
	List<Purchase> query(Purchase purchase);
	List<Purchase> queryNoPage(Purchase purchase);
	int count(Purchase purchase);
	Purchase findById(String id);
	void insert(Purchase purchase);
	void batchInsert(List<Purchase> purchase);
	void update(Purchase purchase);
	void deleteById(String id);
}
