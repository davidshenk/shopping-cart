import React from 'react';
import { useContext } from 'react';
import { ProductsContext } from './ContextShoppingCart';

const CartItem = ({ item }) => {
  const { deleteItemFromCart } = useContext(ProductsContext);

  const handleDelItem = (e) => {
    deleteItemFromCart(e.target.value * 1);
  };

  return (
    <div>
      <div className="card col-9 mx-auto p-4">
        {/* <div className="card-body">{item.title}</div> */}
        <div className="row">
          <div className="col-3">
            <img src={item.images[0]} alt="" className="rounded-3" style={{ width: 200, height: 200 }} />
          </div>
          <div className="col-6  ">
            <h1>{item.title}</h1>
            <h3>{item.description}</h3>
          </div>
          <div className="col-3 d-flex flex-column justify-content-center">
            <h4>{`Q: ${item.q}`}</h4>
            <h4>{`P: ${item.price}`}</h4>
            <h4>{`TP: ${item.price * item.q}`}</h4>
            <button className="btn btn-danger" value={item.id} onClick={handleDelItem}>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
