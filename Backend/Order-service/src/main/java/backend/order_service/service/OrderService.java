package backend.order_service.service;

import backend.order_service.model.Order;
import backend.order_service.model.OrderLineItems;
import backend.order_service.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestClient;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional
public class OrderService {

    private final OrderRepository orderRepository;

 public void placeOrder(List<OrderLineItems> orderLineItems) {
        Order order = new Order();
        order.setOrderNumber(UUID.randomUUID().toString());
        order.setOrderLineItems(orderLineItems);

        RestClient restClient = RestClient.create();

        for (OrderLineItems item : orderLineItems) {
            String inventoryUrl = "http://localhost:8082/api/inventory/" + item.getSkuCode() + "?quantity=" + item.getQuantity();
            
            System.out.println("🔍 Checking Inventory URL: " + inventoryUrl); // DEBUG PRINT

            try {
                Boolean isInStock = restClient.get()
                        .uri(inventoryUrl)
                        .retrieve()
                        .body(Boolean.class);

                if (Boolean.FALSE.equals(isInStock)) {
                    throw new RuntimeException("Product with SkuCode " + item.getSkuCode() + " is out of stock!");
                }
            } catch (Exception e) {
                // This prints the REAL error to your terminal
                System.err.println("❌ ERROR communicating with Inventory Service: " + e.getMessage());
                e.printStackTrace();
                throw e; // Rethrow to stop the order
            }
        }

        orderRepository.save(order);
    }   
}