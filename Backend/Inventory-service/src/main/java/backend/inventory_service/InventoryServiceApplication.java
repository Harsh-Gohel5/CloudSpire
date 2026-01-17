package backend.inventory_service;

import backend.inventory_service.model.Inventory;
import backend.inventory_service.repository.InventoryRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class InventoryServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(InventoryServiceApplication.class, args);
    }

    // This runs automatically when the app starts!
    @Bean
    public CommandLineRunner loadData(InventoryRepository inventoryRepository) {
        return args -> {
            // Check if data already exists so we don't duplicate it on restart
            if (inventoryRepository.count() == 0) {
                Inventory inventory1 = new Inventory();
                inventory1.setSkuCode("iphone_15");
                inventory1.setQuantity(100);

                Inventory inventory2 = new Inventory();
                inventory2.setSkuCode("macbook_pro");
                inventory2.setQuantity(0); // Out of stock!

                inventoryRepository.save(inventory1);
                inventoryRepository.save(inventory2);
                
                System.out.println("✅ Sample Inventory Data Loaded!");
            }
        };
    }
}