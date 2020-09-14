import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { hideAlert, showAlert } from '../store/actions/alertActions';
import { clearProducts, search } from '../store/actions/productsActions';

export const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const onSubmit = event => {
    if (event.key !== 'Enter') {
      return;
    }

    dispatch(clearProducts());

    if (value.trim()) {
      dispatch(hideAlert());
      dispatch(search(value.trim()));
    } else {
      dispatch(showAlert('Please enter the product name'));
    }
  };

  return (
    <div className="form-group">
      <input
        className="form-control"
        onChange={e => setValue(e.target.value)}
        onKeyPress={onSubmit}
        placeholder="Enter the product name..."
        type="text"
        value={value}
      />
    </div>
  );
};
