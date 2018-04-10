package com.douniu.imshh.finance.purchase.service.impl;

import java.util.List;

import com.douniu.imshh.finance.purchase.dao.IDeliverDetailDao;
import com.douniu.imshh.finance.purchase.domain.DeliverDetail;
import com.douniu.imshh.finance.purchase.service.IDeliverDetailService;

public class DeliverDetailService implements IDeliverDetailService {

	private IDeliverDetailDao dao;
	
	@Override
	public List<DeliverDetail> queryByPlan(String planId) {
		return dao.queryByPlan(planId);
	}

	@Override
	public DeliverDetail getById(String id) {
		return dao.findById(id);
	}

	@Override
	public void save(DeliverDetail deliver) {
		if (deliver.getId().equals("")){
			deliver.setId(System.currentTimeMillis()+"");
			dao.insert(deliver);
		}else{
			dao.update(deliver);
		}
	}

	@Override
	public void delete(String id) {
		dao.delete(id);
	}

	@Override
	public void deleteByPlan(String planId) {
		dao.deleteByPlanId(planId);
	}

	public void setDao(IDeliverDetailDao dao) {
		this.dao = dao;
	}
	
}
