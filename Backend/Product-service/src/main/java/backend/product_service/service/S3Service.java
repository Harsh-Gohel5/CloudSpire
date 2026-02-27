package backend.product_service.service;

import io.awspring.cloud.s3.S3Template;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.UUID;

@Service
public class S3Service {

    private final S3Template s3Template;

    @Value("${spring.cloud.aws.s3.bucket}")
    private String bucketName;

    @Value("${spring.cloud.aws.region.static}")
    private String region;

    public S3Service(S3Template s3Template) {
        this.s3Template = s3Template;
    }

    public String uploadImage(MultipartFile file) throws IOException {
        String originalFilename = file.getOriginalFilename();
        String extension = originalFilename != null && originalFilename.contains(".") 
                ? originalFilename.substring(originalFilename.lastIndexOf(".")) 
                : ".jpg";
        String uniqueFileName = UUID.randomUUID().toString() + extension;

        s3Template.upload(bucketName, uniqueFileName, file.getInputStream());

        return "https://" + bucketName + ".s3." + region + ".amazonaws.com/" + uniqueFileName;
    }
}