import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Cart4, Shop, SuitHeart } from 'react-bootstrap-icons';
import Home from './Home';

const NavBar = () => {
  return (
    <>
    
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand ms-3" href="#">
            <Shop size={30}/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              {/* <li className="nav-item">
                <Link to="/" className="nav-link fw-bold">
                  Home
                </Link>
              </li> */}
              <li className="nav-item mx-5">
                <Link to="/cart" className="nav-link">
                  <Cart4 size={30} color={''}/>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/favourites" className="nav-link">
                  <SuitHeart size={30} color={'red'}/>
                  {/* <span className='badge'>1</span> */}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
