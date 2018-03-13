package com.douniu.imshh.finance.purchase.service.impl;

import java.util.List;

import com.douniu.imshh.finance.purchase.dao.IPurchaseDao;
import com.douniu.imshh.finance.purchase.domain.Purchase;
import com.douniu.imshh.finance.purchase.service.IPurchaseService;
import com.douniu.imshh.utils.LikeFlagUtil;

public class PurchaseService implements IPurchaseService{
	private IPurchaseDao dao;
	
	@Override
	public List<Purchase> query(Purchase purchase) {
		// TODO Auto-generated method stub
		Purchase condition = LikeFlagUtil.appendLikeFlag(purchase, new String[]{"supplierName", "materialName"});
		return dao.query(condition);
	}

	@Override
	public List<Purchase> queryNoPage(Purchase purchase) {
		// TODO Auto-generated method stub
		Purchase condition = LikeFlagUtil.appendLikeFlag(purchase, new String[]{"supplierName", "materialName"});
		return dao.queryNoPage(condition);
	}

	@Override
	public int count(Purchase purchase) {
		// TODO Auto-generated method stub
		Purchase condition = LikeFlagUtil.appendLikeFlag(purchase, new String[]{"supplierName", "materialName"});
		return dao.count(condition);
	}

	@Override
	public Purchase getById(String id) {
		// TODO Auto-generated method stub
		return dao.findById(id);
	}

	@Override
	public void save(Purchase purchase) {
		// TODO Auto-generated method stub
		if (purchase.getId().equals("")){
			purchase.setId(System.currentTimeMillis()+"");
			purchase.setStatus(1);
			dao.insert(purchase);
		}else{
			dao.update(purchase);
		}
	}

	@Override
	public void delete(String id) {
		// TODO Auto-generated method stub
		dao.deleteById(id);
	}

	@Override
	public void batchAdd(List<Purchase> Purchases) {
		// TODO Auto-generated method stub
		dao.batchInsert(Purchases);
	}

	public void setDao(IPurchaseDao dao) {
		this.dao = dao;
	}	
}
