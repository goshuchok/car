import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1>Car App</h1>
      <p>About the car</p>
      <ul className="container">
        <li>
          <NavLink className="link" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/create">
            New Cart
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/cart">
            To cart
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
