import React, { useContext } from 'react';
import { Search } from '../components/Search';
import { ProductsContext } from '../context/products/ProductsContext';
import { Card } from '../components/Card';

export const Home = () => {
  const { loading, products } = useContext(ProductsContext);

  return (
    <>
      <Search/>

      <div className="row">
        {loading
          ? <p className="text-center">Loading...</p>
          : products.map((product, index) => (
            <div className="col-sm-4 mb-4" key={index}>
              <Card product={product}/>
            </div>
          ))
        }
      </div>
    </>
  );
};
