import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import Product from './components/Product.js';

const products = [
  {
    id: 1,
    name: "Apple",
    description: 'CCO (Chief Cat Officer)',
    image: "https://tachyons.io/img/avatar_1.jpg",
    price: 100
  },
  {
    id: 2,
    name: "Orange",
    description: 'CCO (Chief Cat Officer)',
    image: "https://tachyons.io/img/avatar_1.jpg",
    price: 100
  },
  {
    id: 3,
    name: "Mike",
    description: 'CCO (Chief Cat Officer)',
    image: "https://tachyons.io/img/avatar_1.jpg",
    price: 100
  },
  {
    id: 4,
    name: "Choco",
    description: 'CCO (Chief Cat Officer)',
    image: "https://tachyons.io/img/avatar_1.jpg",
    price: 100
  },
  {
    id: 5,
    name: "Pinky",
    description: 'CCO (Chief Cat Officer)',
    image: "https://tachyons.io/img/avatar_1.jpg",
    price: 100
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      cart:[
      {
        id: 4,
        name: "Choco",
        description: 'CCO (Chief Cat Officer)',
        image: "https://tachyons.io/img/avatar_1.jpg",
        price: 100,
        units: 1
        },
        ]
    };
  }

  render() {
    return (
      <main className="pa3 pa5-ns flex flex-wrap">
      <ul>
      {
      this.state.cart.map(c => <li>{c.name} | units: {c.units}</li>  )
      }
      </ul>
      {
        products.map(p => <Product key={p.id}{...p}/>)
      }
      </main>
    );
  }
}

render(<App />, document.getElementById('root'));
