import { Component } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './HomePage';
import ProductPage from './ProductPage';
import CartPage from './CartPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/product/:id',
    element: <ProductPage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
]);

class App extends Component {
  render() {
    return (
      <div>
        <RouterProvider router={router} />
      </div>
    );
  }
}

export default App;

