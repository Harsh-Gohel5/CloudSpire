import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
// FIX: Import ONLY ProductCard. Do NOT import { Product }.
import ProductCard from './components/ProductCard'; 
import { Box, Typography, CircularProgress, Alert } from '@mui/material'; 

// DEFINED LOCALLY (This stops the "missing export" error)
interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
}

function App() {
    // STATE
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // FETCH DATA
    useEffect(() => {
        // This URL points to your API Gateway
        fetch('http://localhost:9000/api/product')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to connect to the CloudSpire Backend');
                }
                return response.json();
            })
            .then((data) => {
                setProducts(data); 
                setLoading(false); 
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
                setError("Could not load products. Is your Backend running?");
                setLoading(false);
            });
    }, []);

    return (
        <Box sx={{ minHeight: '100vh', width: '100%', bgcolor: '#f3f4f6' }}>
            <Navbar />
            <Box sx={{ p: 3, maxWidth: '1800px', margin: '0 auto' }}>
                <Box sx={{ mb: 4, bgcolor: 'white', p: 4, borderRadius: 1, boxShadow: 1 }}>
                    <Typography variant="h4" component="h1" fontWeight="bold">
                        Welcome to CloudSpire
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Real-time inventory from your secure microservices.
                    </Typography>
                </Box>
                
                {/* LOADING STATE */}
                {loading && (
                    <Box sx={{ display: 'flex', justifyContent: 'center', p: 5 }}>
                        <CircularProgress />
                    </Box>
                )}

                {/* ERROR STATE */}
                {error && (
                    <Alert severity="error" sx={{ mb: 3 }}>
                        {error}
                    </Alert>
                )}

                {/* PRODUCT LIST */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
                    {!loading && !error && products.length === 0 && (
                        <Typography variant="h6">No products found in the database.</Typography>
                    )}

                    {products.map((product) => (
                        <Box key={product.id} sx={{ 
                            width: { xs: '100%', sm: '45%', md: '30%', lg: '23%' } 
                        }}>
                            <ProductCard product={product} />
                        </Box>
                    ))}
                </Box>

            </Box>
        </Box>
    );
}

export default App;