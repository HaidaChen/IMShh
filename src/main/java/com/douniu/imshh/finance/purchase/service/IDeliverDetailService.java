package com.douniu.imshh.finance.purchase.service;

import java.util.List;

import com.douniu.imshh.finance.purchase.domain.DeliverDetail;

public interface IDeliverDetailService {
	List<DeliverDetail> queryByPlan(String planId);
	DeliverDetail getById(String id);
	void save(DeliverDetail deliver);
	void delete(String id);
	void deleteByPlan(String planId);
}
