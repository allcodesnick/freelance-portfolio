package com.allcodesnick.portfolio.service;

import com.allcodesnick.portfolio.model.OrderRequest;
import org.hibernate.criterion.Order;

import java.util.List;

public interface OrderRequestServiceInterface {

    OrderRequest saveOrderRequest(OrderRequest orderRequest);

    List<OrderRequest> listOrderRequest();

    OrderRequest getOrderRequestByID(long id);

    void deleteOrderRequest(long id);

    OrderRequest updateOrderRequest(OrderRequest orderRequest, long id);
}
