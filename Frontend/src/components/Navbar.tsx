import { AppBar, Toolbar, Typography, Button, Box, InputBase } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';

// Amazon-style Search Bar styling
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 1),
  '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.9) },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto' },
  display: 'flex', // Flex to align icon and input
  flexGrow: 1, // Take up available space
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  right: 0, // Put icon on the right like Amazon
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#febd69', // Amazon Orange
  borderRadius: '0 4px 4px 0',
  color: 'black'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black', // Text color
  width: '100%', // Full width of the search container
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: theme.spacing(2), // Padding for text
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Amazon Dark Blue Color: #131921 */}
      <AppBar position="static" sx={{ bgcolor: '#131921' }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' }, fontWeight: 'bold' }}>
            CloudSpire
          </Typography>

          {/* Search Bar */}
          <Search>
            <StyledInputBase placeholder="Search CloudSpire..." inputProps={{ 'aria-label': 'search' }} />
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          </Search>

          {/* Right Side Icons */}
          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            <Button color="inherit" sx={{ textTransform: 'none', flexDirection: 'column', lineHeight: 1.2, mr: 2 }}>
              <Typography variant="caption" sx={{ fontSize: '0.7rem' }}>Hello, Sign in</Typography>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Account</Typography>
            </Button>
            
            <Button color="inherit">
              <ShoppingCartIcon />
              <Typography variant="body2" sx={{ fontWeight: 'bold', ml: 0.5 }}>Cart</Typography>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Sub-Header for categories (Like Amazon's "Today's Deals", etc.) */}
      <Box sx={{ bgcolor: '#232f3e', color: 'white', p: 1, pl: 3, display: 'flex', gap: 3, fontSize: '0.9rem' }}>
        <span>Today's Deals</span>
        <span>Customer Service</span>
        <span>Registry</span>
        <span>Gift Cards</span>
        <span>Sell</span>
      </Box>
    </Box>
  );
}