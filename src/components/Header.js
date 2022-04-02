import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => (
  <header>
    <div className="headerTitle">
      <ul className="header-links">
        <h2>Bookstore CMS</h2>
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
