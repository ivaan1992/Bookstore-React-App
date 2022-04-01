import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => (
  <header>
    <div>
      <ul className="header-links">
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
