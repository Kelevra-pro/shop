import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../components/Card';
import { Control } from '../components/Control';
import { Pagination } from '../components/Pagination';
import { Search } from '../components/Search';

export const Home = () => {
  const loading = useSelector(s => s.productsReducer.loading);
  const products = useSelector(s => s.productsReducer.products);

  return (
    <>
      <Search/>

      <Control/>

      <div>
        {loading
          ? <p className="text-center">Loading...</p>
          :
          <div>
            <div className="row">
              {products.map((product, index) => {
                return (
                  <div className="col-sm-4 mb-4" key={index}>
                    <Card product={product}/>
                  </div>
                );
              })}
            </div>

            <Pagination/>
          </div>
        }
      </div>
    </>
  );
};
