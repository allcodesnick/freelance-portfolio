package com.allcodesnick.portfolio.controller.user;

import com.allcodesnick.portfolio.model.OrderRequest;
import com.allcodesnick.portfolio.service.OrderRequestService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/order-request")
public class UserOrderRequestController {

    private OrderRequestService orderRequestService;

    public UserOrderRequestController(OrderRequestService orderRequestService) {
        this.orderRequestService = orderRequestService;
    }

    @PostMapping("/create-order")
    public OrderRequest createOrderRequest(@RequestBody OrderRequest orderRequest){
        return orderRequestService.saveOrderRequest(orderRequest);
    }
}
