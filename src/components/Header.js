import { Link } from 'react-router-dom';
import React from 'react';
import '../styles/header.css';

const Header = () => (
  <div>
    <div className="header">
      <h1>Math Magicians</h1>
      <div className="ulDiv">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/calculator">Calculator</Link></li>
          <li><Link to="/quote">Quotes</Link></li>
        </ul>
      </div>
    </div>
  </div>
);

export default Header;
