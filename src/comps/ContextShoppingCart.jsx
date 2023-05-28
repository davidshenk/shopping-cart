import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import productList from './ListProductsJson';

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  // const [product, setProduct] = useState(productList[0])
  const [products, setProducts] = useState(productList);
  const [filterdProducts, setFilterdProducts] = useState(products);
  const [sortType, setSortType] = useState('');
  const [cart, setCart] = useState([]);
  const [favourites, setFavourites] = useState(JSON.parse(localStorage.getItem('favourites')) || []);

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  const addItemToFav = (id) => {
    console.log(`add: ${id}`);
    const index = favourites.map((f) => f.id).indexOf(id);
    if (index === -1) setFavourites([...favourites, { id: id }]);
  };

  const removeItemFromFav = (id) => {
    console.log(`remove: ${id}`);
    setFavourites(favourites.filter((fi) => fi.id !== id));
  };

  const addItemToCart = (id, q) => {
    const index = cart.map((c) => c.id).indexOf(id);
    if (index === -1) setCart([...cart, { id: id, q: q }]);
    else {
      let newCart = cart;
      newCart[index].q += q;
      setCart(newCart);
    }
  };

  const deleteItemFromCart = (id) => {
    setCart(cart.filter((ci) => ci.id !== id));
  };

  const filterProductsByCategory = (cat) => {
    if (cat === 'All') setFilterdProducts(products);
    else setFilterdProducts(products.filter((p) => p.category === cat));
    setSortType('');
  };

  const orderProductsBy = (type) => {
    setSortType(type);
    let sorted = [];
    switch (type) {
      case 'id':
        sorted = [...filterdProducts].sort((a, b) => b.id - a.id);
return;
      case 'rating':
        sorted = [...filterdProducts].sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        sorted = [...filterdProducts].sort((a, b) => {
          if (a.title && b.title) {
            return a.title.localeCompare(b.title);
          } else {
            return 0;
          }
        });
        break;
      case 'price up':
        sorted = [...filterdProducts].sort((a, b) => a.price - b.price);
        break;
      case 'price down':
        sorted = [...filterdProducts].sort((a, b) => b.price - a.price);
        break;
      default:
        sorted = filterdProducts;
        break;
    }
    setFilterdProducts(sorted);
  };

  const sharedContext = {
    products,
    filterdProducts,
    filterProductsByCategory,
    orderProductsBy,
    sortType,
    addItemToCart,
    cart,
    deleteItemFromCart,
    favourites,
    addItemToFav,
    removeItemFromFav,
  };

  return <ProductsContext.Provider value={sharedContext}>{children}</ProductsContext.Provider>;
};

export default ProductsContextProvider;
