package com.douniu.imshh.finance.order.service.impl;

import java.util.List;

import com.douniu.imshh.finance.order.dao.IOrderDetailDao;
import com.douniu.imshh.finance.order.domain.OrderDetail;
import com.douniu.imshh.finance.order.service.IOrderDetailService;

public class OrderDetailService implements IOrderDetailService{
	private IOrderDetailDao dao;
	
	@Override
	public List<OrderDetail> queryByOrder(String orderId) {
		return dao.queryByOrder(orderId);
	}

	@Override
	public void batchAdd(List<OrderDetail> details) {
		dao.batchInsert(details);
	}

	@Override
	public void save(OrderDetail detail) {
		if (detail.getId().equals("")){
			detail.setId(System.currentTimeMillis()+"");
			detail.setStatus(1);
			dao.insert(detail);
		}else{
			dao.update(detail);
		}
	}

	@Override
	public void delete(String id) {
		dao.delete(id);
	}

	public void setDao(IOrderDetailDao dao) {
		this.dao = dao;
	}
	
}
