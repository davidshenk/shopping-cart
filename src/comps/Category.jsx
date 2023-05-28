import React, { useContext } from 'react';
import CategoryItem from './CategoryItem';
import Item from './Item';
import { ProductsContext } from './ContextShoppingCart';
import FilterButton from './FilterButton';

const Category = () => {
  const { filterdProducts, orderProductsBy } = useContext(ProductsContext);

  return (
    <div>
      <FilterButton/>
      <div className="container">
        <div className="row mt-4">
          {filterdProducts.map((p) => (
            <CategoryItem key={p.id} item={p}/>
          ))}
          {/* {filterdProducts.map((p) => (
            <Item key={p.id} item={p} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Category;
