import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const Header = () => (
  <header>
    <div className="headerContent">
      <div className="titleLinks">
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
      <div className="userdiv">
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  </header>
);

export default Header;
