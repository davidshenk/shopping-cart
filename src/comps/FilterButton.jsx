import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ProductsContext } from './ContextShoppingCart';

const FilterButton = () => {
  const { products, filterProductsByCategory, orderProductsBy } = useContext(ProductsContext);
  const categories = ['All', ...new Set(products.map((i) => i.category))];
  const sortOptions = ['rating', 'price up', 'price down', 'name'];

  const [currentCategory, setCurrentCategory] = useState('All');
  const [currentSortOption, setCurrentSortOption] = useState('id');

  const availableCategories = categories.filter((c) => c !== currentCategory);
  const availablesorts = sortOptions.filter((c) => c !== currentSortOption);

  useEffect(() => {
    return () => {
      filterProductsByCategory('All');
    };
  }, []);

  const handleCatBtnClick = (e) => {
    const cat = e.target.value;
    setCurrentCategory(cat);
    filterProductsByCategory(cat);
  };

  const handleSortBtnClick = (e) => {
    const sortOption = e.target.value;
    setCurrentSortOption(sortOption);
    orderProductsBy(sortOption);
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center my-2 ">
        <h5 className="me-3">Filter by category</h5>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-outline dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {currentCategory}
          </button>
          <ul className="dropdown-menu">
            {availableCategories.map((c, i) => (
              <li key={i}>
                <button className="dropdown-item" value={c} onClick={handleCatBtnClick}>
                  {c}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center my-2">
        <h5 className="me-3">Sort by</h5>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-outline dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {currentSortOption === 'id' ? '' : currentSortOption}
          </button>
          <ul className="dropdown-menu">
            {availablesorts.map((s, i) => (
              <li key={i}>
                <button className="dropdown-item" value={s} onClick={handleSortBtnClick}>
                  {s}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterButton;
