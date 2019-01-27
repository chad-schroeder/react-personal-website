import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav className="d-flex align-items-center">
          <ul className="nav">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">
                Hello
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/projects" className="nav-link">
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <img
          src="images/icons/users-4.svg"
          className="avatar"
          alt="avatar of me"
        />
      </div>
    );
  }
}

export default Navbar;
