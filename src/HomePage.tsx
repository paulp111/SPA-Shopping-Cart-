import { Component } from 'react';
import { Product } from './types'; 

interface State {
  products: Product[];
}

class HomePage extends Component<{}, State> { 
  state: State = {
    products: [], 
  };

  componentDidMount() {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        this.setState({ products: data as Product[] });
      });
  }

  render() {
    return (
      <div>
        {this.state.products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} width="100" />
            <p>${product.price}</p>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default HomePage;
