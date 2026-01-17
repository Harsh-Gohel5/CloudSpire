package backend.order_service.repository;

import backend.order_service.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
    // This interface gives us magical methods like .save() and .findAll()
}