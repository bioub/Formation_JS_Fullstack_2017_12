import React from 'react';
import {
  LinkContainer
} from 'react-router-bootstrap'


const Menu = () => (
  <nav className="navbar navbar-expand navbar-light bg-light">
    <a className="navbar-brand" href="#">AddressBook</a>
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item">
        <LinkContainer to="/contacts">
          <a className="nav-link">Contacts</a>
        </LinkContainer>

      </li>
    </ul>
  </nav>
);

export default Menu;
