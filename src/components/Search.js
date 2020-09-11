import React, { useContext, useState } from 'react';
import { AlertContext } from '../context/alert/AlertContext';
import { ProductsContext } from '../context/products/ProductsContext';

export const Search = () => {
  const [value, setValue] = useState('');
  const alert = useContext(AlertContext);
  const products = useContext(ProductsContext);

  const onSubmit = event => {
    if (event.key !== 'Enter') {
      return;
    }

    if (value.trim()) {
      alert.hide();
      products.search(value.trim());
    } else {
      alert.show('Please enter the product name');
    }
  }

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
