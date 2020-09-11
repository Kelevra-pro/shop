import React, { useReducer } from 'react';
import axios from 'axios';
import { productsReducer } from './productsReducer';
import { ProductsContext } from './ProductsContext';
import { CLEAR_PRODUCTS, SEARCH_PRODUCTS, SET_LOADING } from '../types';

const url = 'https://www.lenvendo.ru/api/js-test-task/';

export const ProductsState = ({ children }) => {
  const initialState = {
    products: [],
    loading: false
  };

  const [state, dispatch] = useReducer(productsReducer, initialState);

  const search = async value => {
    setLoading();

    const response = await axios.get(`${url}?${value}`);

    console.log(response);

    dispatch({
      type: SEARCH_PRODUCTS,
      payload: response.data
    });
  };

  const clearProducts = () => dispatch({ type: CLEAR_PRODUCTS });

  const setLoading = () => dispatch({ type: SET_LOADING });

  const { products, loading } = state;

  return (
    <ProductsContext.Provider
      value={{ search, products, clearProducts, loading }}>
      {children}
    </ProductsContext.Provider>
  );
};