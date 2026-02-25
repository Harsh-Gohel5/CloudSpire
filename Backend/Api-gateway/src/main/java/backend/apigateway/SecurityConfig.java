package backend.apigateway;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod; // Added this import
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;

@Configuration
@EnableWebFluxSecurity
public class SecurityConfig {

    @Bean
    public SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity serverHttpSecurity) {
        serverHttpSecurity
            .csrf(ServerHttpSecurity.CsrfSpec::disable)
            .authorizeExchange(exchange -> exchange
                .pathMatchers(HttpMethod.OPTIONS, "/**").permitAll() // 🔓 Allows browser CORS checks to pass
                .pathMatchers("/eureka/**").permitAll() 
                .pathMatchers("/api/product/**").permitAll() // 🔓 THE MAGIC KEY: Let React read products without logging in
                .anyExchange().authenticated())         
            .oauth2Login(Customizer.withDefaults());    
        
        return serverHttpSecurity.build();
    }
}