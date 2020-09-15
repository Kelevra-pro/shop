import React from 'react';

export const Card = ({ product }) => (
  <div className="card" style={{ height: 530 }}>
    <img src={product.image} alt={product.image} className="card-img-top p-3"
         style={{ maxHeight: 400, objectFit: 'contain' }}/>
    <div className="card-body">
      <h5 className="card-title">{product.name}</h5>
      <h5 className="card-text">{product.price}</h5>
    </div>
  </div>
);
