package backend.product_service.controller;

import backend.product_service.model.Product;
import backend.product_service.repository.ProductRepository;
import backend.product_service.service.S3Service;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController                  // Tells Spring: "I handle API requests"
@RequestMapping("/api/product")  // Base URL for this controller
@RequiredArgsConstructor         // Auto-injects the Repository (Dependency Injection)
public class ProductController {

    private final ProductRepository productRepository;
    private final S3Service s3Service; // Injects your brand new AWS S3 worker

    // Handles POST requests - Updated to accept files!
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public Product createProduct(
            @RequestPart("product") Product product,
            @RequestPart(value = "file", required = false) MultipartFile file) throws IOException {
        
        // 1. If an image file was attached, send it to AWS S3
        if (file != null && !file.isEmpty()) {
            String imageUrl = s3Service.uploadImage(file);
            product.setImageUrl(imageUrl); // Attach the secure S3 link to the product
        }

        // 2. Save to Database (now with the image link!)
        return productRepository.save(product); 
    }

    @GetMapping                  // Handles GET requests (Read)
    @ResponseStatus(HttpStatus.OK)
    public List<Product> getAllProducts() {
        return productRepository.findAll(); // Reads from Database
    }
    
    @DeleteMapping("/{id}")      // Handles DELETE requests
    @ResponseStatus(HttpStatus.NO_CONTENT) // Returns a 204 status (Success, no body)
    public void deleteProduct(@PathVariable Long id) {
        productRepository.deleteById(id); // Deletes from the PostgreSQL Database
    }
}