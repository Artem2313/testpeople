import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <div>
    <ul>
      <li>
        <NavLink to="/">Public</NavLink>
      </li>
      <li>
        <NavLink to="/users">Users</NavLink>
      </li>
    </ul>
  </div>
);

export default Nav;
