import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideAlert, showAlert } from '../store/actions/alertActions';
import { search } from '../store/actions/productsActions';

export const Search = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(s => s.productsReducer.search);
  const sortField = useSelector(s => s.productsReducer.sortField);
  const sortDirection = useSelector(s => s.productsReducer.sortDirection);
  const currentPage = useSelector(s => s.productsReducer.currentPage);

  useEffect(() => {
    dispatch(search(searchValue.trim(), sortField, sortDirection, currentPage));
    // eslint-disable-next-line
  }, []);

  const setSearch = value => {
    if (value.trim()) {
      dispatch(hideAlert());
      dispatch(search(value.trim(), sortField, sortDirection, currentPage));
    } else {
      dispatch(showAlert('Please enter the product name'));
    }
  };

  return (
    <div className="form-group">
      <input
        className="form-control"
        onChange={e => setSearch(e.target.value)}
        placeholder="Enter the product name..."
        type="text"
      />
    </div>
  );
};
