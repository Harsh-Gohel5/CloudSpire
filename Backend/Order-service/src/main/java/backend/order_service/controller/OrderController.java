package backend.order_service.controller;

import backend.order_service.model.OrderLineItems;
import backend.order_service.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/order")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public String placeOrder(@RequestBody List<OrderLineItems> orderLineItems) {
        orderService.placeOrder(orderLineItems);
        return "Order Placed Successfully";
    }
}