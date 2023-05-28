import React, { createContext, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { filterdProducts, ProductsContext } from './ContextShoppingCart';

const Item = () => {
  const [qValue, setQValue] = useState(1);
  const { products, addItemToCart } = useContext(ProductsContext);

  const params = useParams();
  const itemId = params.itemId * 1;
  console.log(params);

  const item = products.find((p) => p.id === itemId);

  const onAddToCArtClick = () => {
    addItemToCart(item.id, qValue);
  };

  return (
    <div className="container" style={{ marginBlock: 140 }}>
      <div className="row">
        <div id="carouselExampleIndicators" className="carousel slide col-12 col-md-6 mb-3">
          <div className="carousel-indicators">
            {item.images.map((img, i) => (
              <button key={i}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={i}
                className={i === 0 ? 'active' : ''}
                aria-current="true"
                aria-label="Slide 1"
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {item.images.map((img, i) => (
              <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                <img src={img} className="d-block w-100" alt="..." />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div id="propeties" className="col-12 col-md-6">
          <h1 className="mb-5">{item.title}</h1>
          <h3 className="mb-5">{item.description}</h3>
          <h1 className="mb-5">{`Price: ${item.price} $`} </h1>
          <div className="row justify-content-between mt-5">
            <div className="col-4">
              <div className="input-group input-group-lg ">
                <span className="input-group-text" id="inputGroup-sizing-lg">
                  Q
                </span>
                <input
                  onChange={(e) => setQValue(e.target.value * 1)}
                  value={qValue}
                  min={1}
                  max={item.stock}
                  type="number"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                />
              </div>
            </div>
            <button className="btn btn-primary col-7" onClick={onAddToCArtClick}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;

// import React, { createContext, useContext } from 'react';
// import productList from './ListProductsJson';
// import { filterdProducts } from './ContextShoppingCart';

// const Item = ({ item }) => {
//   console.log('nn', { item });
//   return (
//     <div>

//       <div className="card container mb-3">
//   <div className="row g-0 col-12">
//     <div className="col-4">
//       <img src={item.images[0]} className="img-fluid rounded-start" alt="..."/>
//     </div>
//     <div className="col-md-8">
//       <div className="card-body">
//         <h5 className="card-title">Card title</h5>
//         <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//         <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
//       </div>
//     </div>
//   </div>
// </div>

//     </div>
//   );
// };

// export default Item;
