package com.allcodesnick.portfolio.service;

import com.allcodesnick.portfolio.model.OrderStatus;

public interface OrderStatusServiceInterface {

    OrderStatus saveOrderStatus(OrderStatus orderStatus);

    OrderStatus getOrderStatusById(long id);

    OrderStatus updateOrderStatus(OrderStatus orderStatus, long id);
}
