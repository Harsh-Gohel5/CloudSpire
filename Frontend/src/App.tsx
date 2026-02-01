import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard'; // <--- Only import the Component
import { Box, Typography } from '@mui/material'; 

// Mock Data (No strict ": Product[]" type, just let it be data)
const mockProducts = [
    { id: 1, name: "Gaming Laptop", price: 1299.99, description: "High-performance rig.", imageUrl: "https://via.placeholder.com/300" },
    { id: 2, name: "Wireless Mouse", price: 49.99, description: "Precision tracking.", imageUrl: "https://via.placeholder.com/300" },
    { id: 3, name: "Mechanical Keyboard", price: 159.50, description: "Clicky switches.", imageUrl: "https://via.placeholder.com/300" },
    { id: 4, name: "4K Monitor", price: 349.00, description: "Ultra HD display.", imageUrl: "https://via.placeholder.com/300" },
    { id: 5, name: "Headphones", price: 199.00, description: "Noise cancelling.", imageUrl: "https://via.placeholder.com/300" },
    { id: 6, name: "Webcam", price: 89.00, description: "1080p streaming.", imageUrl: "https://via.placeholder.com/300" },
    { id: 7, name: "USB Hub", price: 39.00, description: "7 ports.", imageUrl: "https://via.placeholder.com/300" },
    { id: 8, name: "Speaker", price: 79.00, description: "Bluetooth bass.", imageUrl: "https://via.placeholder.com/300" },
];

function App() {
    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#f3f4f6' }}>
            <Navbar />
            <Box sx={{ p: 3, maxWidth: '1800px', margin: '0 auto' }}>
                <Box sx={{ mb: 4, bgcolor: 'white', p: 4, borderRadius: 1, boxShadow: 1 }}>
                    <Typography variant="h4" component="h1" fontWeight="bold">
                        Welcome to CloudSpire
                    </Typography>
                </Box>
                
                {/* FLEXBOX LAYOUT (No Grid Component to cause errors) */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
                    {mockProducts.map((product) => (
                        <Box key={product.id} sx={{ 
                            width: { xs: '100%', sm: '45%', md: '30%', lg: '23%' } 
                        }}>
                            {/* We just pass the data. As long as the shape matches, it works. */}
                            <ProductCard product={product} />
                        </Box>
                    ))}
                </Box>

            </Box>
        </Box>
    );
}

export default App;