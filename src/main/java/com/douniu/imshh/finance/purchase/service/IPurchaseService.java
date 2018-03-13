package com.douniu.imshh.finance.purchase.service;

import java.util.List;

import com.douniu.imshh.finance.purchase.domain.Purchase;

public interface IPurchaseService {
	List<Purchase> query(Purchase purchase);
	List<Purchase> queryNoPage(Purchase purchase);
	int count(Purchase purchase);
	Purchase getById(String id);
	void save(Purchase purchase);
	void delete(String id);
	void batchAdd(List<Purchase> Purchases);
}
