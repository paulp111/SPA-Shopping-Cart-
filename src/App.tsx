import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import CartPage from './CartPage'; // Stellen Sie sicher, dass Sie CartPage hier importieren
import { CartProvider } from './CartContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#131921', // Dunkelblau wie Amazon Header
    },
    secondary: {
      main: '#ff9900', // Amazon-Button Orange
    },
    background: {
      default: '#eaeded', // Amazon Hintergrund Grau
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;