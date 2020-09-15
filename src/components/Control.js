import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { search } from '../store/actions/productsActions';

export const Control = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(s => s.productsReducer.search);
  const currentPage = useSelector(s => s.productsReducer.currentPage);

  const setSelect = sort => {
    const sortMap = {
      nameAsc: ['name', 'asc'],
      nameDesc: ['name', 'desc'],
      priceAsc: ['price', 'asc'],
      priceDesc: ['price', 'desc']
    };

    dispatch(search(searchValue, ...sortMap[sort], currentPage));
  };

  return (
    <form className="form-inline my-4">
      <p className="m-1">Sort by</p>
      <select className="custom-select"
              onChange={e => setSelect(e.target.value)}>
        <option value="nameAsc">Name: Alphabetical</option>
        <option value="nameDesc">Name: Reverse</option>
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
      </select>
    </form>
  );
};
