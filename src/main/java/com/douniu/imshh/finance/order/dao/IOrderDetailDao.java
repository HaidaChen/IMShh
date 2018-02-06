package com.douniu.imshh.finance.order.dao;

import java.util.List;

import com.douniu.imshh.finance.order.domain.OrderDetail;

public interface IOrderDetailDao {
	List<OrderDetail> queryByOrder(String orderId);
	void update(OrderDetail orderDetail);
	void insert(OrderDetail orderDetail);
	void delete(String id);
	void batchInsert(List<OrderDetail> orderDetails);
}
