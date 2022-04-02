import React from 'react';
import { useDispatch } from 'react-redux';
import { categoriesStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Categories Section</h1>
      <button
        type="button"
        onClick={() => {
          dispatch(categoriesStatus());
        }}
      >
        Check status
      </button>
    </div>
  );
};

export default Categories;
