import Navbar from './components/Navbar';
import { Container, Typography, Box } from '@mui/material';

function App() {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to CloudSpire
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Your secure, cloud-native shopping experience.
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default App;