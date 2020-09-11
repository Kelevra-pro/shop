import React from 'react';
// import { Link } from 'react-router-dom';

export const Card = ({ product }) => (
  <div className="card">
    <img src={product.image} alt={product.image} className="card-img-top"/>
    <div className="card-body">
      <h5 className="card-title">{product.name}</h5>
      <h5 className="card-title">{product.price}</h5>
      {/*<Link*/}
      {/*  to={'/profile/' + user.login}*/}
      {/*  className="btn btn-primary"*/}
      {/*>*/}
      {/*  Open*/}
      {/*</Link>*/}
    </div>
  </div>
);
