package backend.inventory_service.service;

import backend.inventory_service.repository.InventoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class InventoryService {

    private final InventoryRepository inventoryRepository;

    @Transactional(readOnly = true)
    public boolean isInStock(String skuCode, Integer quantity) {
        return inventoryRepository.findBySkuCode(skuCode)
                .isPresent() && inventoryRepository.findBySkuCode(skuCode).get().getQuantity() >= quantity;
    }
}