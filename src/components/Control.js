import React, { useState } from 'react';

export const Control = () => {
  const [value, setValue] = useState('nameAsc');

  const setSelect = value => {
    console.log(value);
  };

  return (
    <div className="container my-4">
      <div className="row align-items-center">
        <div className="col-sm">
          <form className="form-inline" onSubmit={setSelect}>
            <p className="my-1">Sort by</p>
            <select className="custom-select" value={value}
                    onChange={e => setValue(e.target.value)}>
              <option value="nameAsc">Name: Alphabetize</option>
              <option value="nameDesc">Name: Reverse</option>
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
            </select>
          </form>
        </div>

        <div className="col-sm d-flex align-baseline justify-content-end">
          <a className="mx-1" href="/"><i
            className="material-icons">list</i></a>
          <a className="mx-1" href="/"><i className="material-icons">grid_on</i></a>
        </div>
      </div>
    </div>
  );
};
