import { Card, CardContent, CardMedia, Typography, Button, Box, Rating } from '@mui/material';

// The interface MUST have 'export'
export interface Product {
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
   // ... (rest of the component code)
   return (
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* Card content code ... */}
          <Box sx={{ p: 2, display: 'flex', justifyContent: 'center', bgcolor: 'white' }}>
              <CardMedia component="img" height="200" image={product.imageUrl} alt={product.name} sx={{ objectFit: 'contain' }} />
          </Box>
          <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="h5">${product.price}</Typography>
              <Button fullWidth variant="contained" sx={{ mt: 2, bgcolor: '#f59e0b' }}>Add to Cart</Button>
          </CardContent>
      </Card>
   );
}