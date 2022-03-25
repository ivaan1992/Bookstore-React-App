import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div>
      <ul>
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
