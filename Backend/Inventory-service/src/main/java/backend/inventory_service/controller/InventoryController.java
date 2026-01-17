package backend.inventory_service.controller;

import backend.inventory_service.service.InventoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/inventory")
@RequiredArgsConstructor
public class InventoryController {

    private final InventoryService inventoryService;

    // Call this like: http://localhost:8082/api/inventory/iphone_15?quantity=2
    @GetMapping("/{skuCode}")
    @ResponseStatus(HttpStatus.OK)
    public boolean isInStock(@PathVariable("skuCode") String skuCode, @RequestParam("quantity") Integer quantity) {
        return inventoryService.isInStock(skuCode, quantity);
    }
}