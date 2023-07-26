import { NavLink } from 'react-router-dom';
import React from 'react';
import '../styles/header.css';

const Header = () => (
  <div>
    <div className="header">
      <h1>Math Magicians</h1>
      <div className="ulDiv">
        <ul>
          <li className="nav-links"><NavLink to="/">Home</NavLink></li>
          <li className="nav-links"><NavLink to="/calculator">Calculator</NavLink></li>
          <li className="nav-links"><NavLink to="/quote">Quotes</NavLink></li>
        </ul>
      </div>
    </div>
  </div>
);

export default Header;
