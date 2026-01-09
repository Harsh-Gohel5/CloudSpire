package backend.product_service.controller;

import backend.product_service.model.Product;
import backend.product_service.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController                  // Tells Spring: "I handle API requests"
@RequestMapping("/api/product")  // Base URL for this controller
@RequiredArgsConstructor         // Auto-injects the Repository (Dependency Injection)
public class ProductController {

    private final ProductRepository productRepository;

    @PostMapping                 // Handles POST requests (Create)
    @ResponseStatus(HttpStatus.CREATED)
    public Product createProduct(@RequestBody Product product) {
        return productRepository.save(product); // Saves to Database
    }

    @GetMapping                  // Handles GET requests (Read)
    @ResponseStatus(HttpStatus.OK)
    public List<Product> getAllProducts() {
        return productRepository.findAll(); // Reads from Database
    }
}