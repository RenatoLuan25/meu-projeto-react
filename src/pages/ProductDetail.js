
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  return (
    <div className="container">
      <Link to="/" className="btn voltar">← Voltar</Link>
      {product ? (
        <div className="detail-container">
          <img src={product.thumbnail} alt={product.title} className="detail-img" />
          <div>
            <h1>{product.title}</h1>
            <p><strong>Descrição:</strong> Produto da categoria {product.category.toUpperCase()} da marca {product.brand}. Ideal para diversas finalidades do dia a dia.</p>
            <p><strong>Preço:</strong> R$ {Math.floor(product.price)}</p>
            <p><strong>Marca:</strong> {product.brand}</p>
            <p><strong>Categoria:</strong> {product.category}</p>
          </div>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default ProductDetail;
