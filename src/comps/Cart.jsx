import React, { useContext } from 'react';
import CartItem from './CartItem';
import { ProductsContext } from './ContextShoppingCart';

const Cart = () => {
  const { cart, products } = useContext(ProductsContext);

  const cartItems = cart.map((ci) => ({ ...ci, ...products.find((p) => p.id === ci.id) }));

  const sumTotal = cartItems.reduce((sum, item) => (sum += item.q * item.price), 0);

  return (
    <div className="container">
      <div className="row g-5 py-5">
        <div className="col-9 mx-auto d-flex justify-content-end">
          {cart.length > 0 ? <h2>{`Total Price: ${sumTotal}`}</h2> : <h2>Cart is empty</h2>}
        </div>
        {cartItems.map((cartItem, i) => (
          <CartItem key={i} item={cartItem} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
