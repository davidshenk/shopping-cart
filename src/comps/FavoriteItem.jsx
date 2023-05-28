import React from 'react';

const FavoriteItem = ({ item }) => {
  return (
   
      <div className="card col-3">
        <img src={item.images[0]} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    
  );
};

export default FavoriteItem;
