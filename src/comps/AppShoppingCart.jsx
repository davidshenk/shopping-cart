import React from 'react';
import { useContext } from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Cart from './Cart';
import Category from './Category';
import CategoryItem from './CategoryItem';
import ContextProducts, { ProductsContext } from './ContextShoppingCart';
import Favourites from './Favourites';
import FilterButton from './FilterButton';
import Home from './Home';
import Item from './Item';
import NavBar from './NavBar';


const AppShoppingCart = () => {
 localStorage.setItem("1","item")
 const ytre = localStorage.getItem(1)
 console.log(ytre);

  return (
    <div>
      <NavBar />
      {/* <BrowserRouter> */}
      <Routes>
        <Route index path="/" element={<Category />}></Route>
        <Route index path="/cart" element={<Cart />}></Route>
        <Route index path="/favourites" element={<Favourites />}></Route>
        {/* <Route path="/items/:itemId" element={<Item itemId={itemId}/>}></Route> */}
        <Route path="/items/:itemId" element={<Item  />}></Route>
      </Routes>
      {/* </BrowserRouter> */}
      {/* <Category /> */}
      {/* <Home/> */}
      {/* <Item/> */}
    </div>
  );
};

export default AppShoppingCart;
