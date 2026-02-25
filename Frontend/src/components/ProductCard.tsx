import { Card, CardContent, CardMedia, Typography, Button, Box, Rating } from '@mui/material';

// 1. Define the shape of a Product strictly for this card
interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
}

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ p: 2, display: 'flex', justifyContent: 'center', bgcolor: 'white' }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={product.imageUrl}
                    alt={product.name}
                    sx={{ objectFit: 'contain' }}
                />
            </Box>
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle1" fontWeight={600}>{product.name}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
                    <Rating value={4.5} precision={0.5} size="small" readOnly />
                </Box>
                <Typography variant="h5" fontWeight="bold">${product.price}</Typography>
                <Button fullWidth variant="contained" sx={{ mt: 2, bgcolor: '#f59e0b' }}>
                    Add to Cart
                </Button>
            </CardContent>
        </Card>
    );
}