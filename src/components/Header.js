import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const Header = () => (
  <header>
    <div className="headerContent d-flex blue">
      <div className="titleLinks d-flex">
        <ul className="header-links d-flex">
          <h2>Bookstore CMS</h2>
          <li className="d-flex">
            <Link to="/">Books</Link>
          </li>
          <li className="d-flex">
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
