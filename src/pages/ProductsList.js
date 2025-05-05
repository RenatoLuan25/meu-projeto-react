
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=10')
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <div className="container">
      <h1>Catálogo de Produtos</h1>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title} />
            <h2>{product.title}</h2>
            <p className="price">R$ {Math.floor(product.price)}</p>
            <Link to={`/product/${product.id}`} className="btn">Ver Detalhes</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
