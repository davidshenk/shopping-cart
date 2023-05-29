// import React, { useContext, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { ProductsContext } from './ContextShoppingCart';
// import { Star, StarFill } from 'react-bootstrap-icons';

// const CategoryItem = ({ item }) => {
//   const { addItemToCart, addItemToFav, removeItemFromFav, favourites } = useContext(ProductsContext);
//   const linkTo = `/items/${item.id}`;
//   const [isFav, setIsFav] = useState(false);

//   const favHandleClick = (e) => {
//     console.log(item.id);
//     console.log(isFav);
//     setIsFav(!isFav);
//     // console.log(isFav);
//     // isFav ? addItemToFav(item.id) : removeItemFromFav(item.id);
//   };

//   useEffect(() => {
//     console.log(isFav);
//     isFav ? addItemToFav(item.id) : removeItemFromFav(item.id);
//   }, [isFav]);

//   // useEffect(() => {
//   //   const isFavItem = IsItemInFavorites(item.id);
//   //   console.log(`isFavItem: ${isFavItem}`);
//   //   setIsFav(isFavItem);
//   // }, []);

//   const IsItemInFavorites = (itemID) => {
//     return favourites.indexOf((fi) => fi.id === itemID) !== -1;
//   };

//   return (
//     <div className="col-12 col-sm-6  col-lg-4 col-xl-3 mb-3">
//       <div className="card">
//         <div className="d-flex justify-content-end">
//           <button className="btn btn-link" onClick={favHandleClick}>
//             {isFav ? <StarFill size={30} /> : <Star size={30} />}
//           </button>
//         </div>
//         <Link to={linkTo}>
//           <img src={item.images[0]} className="card-img-top" alt="..." style={{ maxHeight: '50%', height: '200px' }} />
//         </Link>
//         <div className="card-body">
//           <Link className="text-decoration-none text-reset" to={linkTo}>
//             <h5 className="card-title">{item.title}</h5>
//             <p className="card-subtitle">{item.description}</p>
//             {/* <p className="card-text">brand: {item.brand}</p> */}
//             <h5>{item.price} $ </h5>
//             <h5>{item.rating} </h5>
//           </Link>
//           <button className="btn btn-primary" onClick={() => addItemToCart(item.id, 1)}>
//             Add to cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryItem;

import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from './ContextShoppingCart';
import { SuitHeart, SuitHeartFill } from 'react-bootstrap-icons';

const CategoryItem = ({ item, classes }) => {
  const { addItemToCart, addItemToFav, removeItemFromFav, favourites } = useContext(ProductsContext);
  const linkTo = `/items/${item.id}`;
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    setIsFav(favourites.some((fi) => fi.id === item.id));
  }, [favourites]);

  const favHandleClick = () => {
    if (isFav) {
      removeItemFromFav(item.id);
    } else {
      addItemToFav(item.id);
    }
  };
   
  const description = item.description;    // a new variable for the product description so i can change the CSS 
  // object for style of the card height
  const cardStyle ={
   height: '500px'
  }
  const fontSize = description.length > 80 ? '13px' : '18px' // variable and "if" for change the font size according length of the description

  return (
    <div className={classes || 'col-12 col-sm-6 col-lg-4 col-xl-3 mb-3'}>
      <div className="card" style={cardStyle}>
        <div className="d-flex justify-content-end">
          <button className="btn btn-link" onClick={favHandleClick}>
            {isFav ? <SuitHeartFill size={30} color={'red'} /> : <SuitHeart size={30} color={'red'} />}
          </button>
        </div>
        <Link to={linkTo}>
          <img
            src={item.images[0]}
            className=" img-thumbnail border-0"
            alt="..."
            style={{ height: '200px' }}
          />
        </Link>
        <div className="card-body p-0">
          <Link className="text-decoration-none text-reset" to={linkTo}>
            <h5 className="card-title">{item.title}</h5>
            <p className="card-subtitle" style={{fontSize}}>{description}</p>
            {/* <p className="card-text">brand: {item.brand}</p> */}
            <h5>{item.price} $ </h5>
            <h5>{item.rating} </h5>
          </Link>
          {/* A separate div to fix the button add to cart with fixed spacing */}
          <div className='posotion-relative'>
          <div className='position-absolute bottom-0 start-50 translate-middle'> 
          <button className="btn btn-primary" onClick={() => addItemToCart(item.id, 1)}>
            Add to cart
          </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
