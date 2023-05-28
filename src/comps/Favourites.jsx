import React from 'react';
import { useContext } from 'react';
import CategoryItem from './CategoryItem';
import { ProductsContext } from './ContextShoppingCart';
import FavoriteItem from './FavoriteItem';

const Favourites = () => {
  const { products, favourites } = useContext(ProductsContext);
  const favouritesItems = favourites.map((fi) => ({ ...products.find((p) => p.id === fi.id) }));
  console.log(favourites);
  return (
    <div>
      <div className="container">
        <div className="row">
          {favourites?.length > 0 ? (
            // favouritesItems.map((favouritesItem) => <FavoriteItem key={favouritesItem.id} item={favouritesItem} />)
            favouritesItems.map((favouritesItem) => <CategoryItem key={favouritesItem.id} item={favouritesItem} classes='col-6'/>)
          ) : (
            <h1>עדיין אין מועדפים</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favourites;
