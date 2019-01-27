import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends PureComponent {
  render() {
    return (
      <div className="Navbar">
        <nav class="d-flex align-items-center">
          <ul class="nav">
            <li class="nav-item active">
              <NavLink exact to="/" className="nav-link">
                Hello
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink exact to="/projects" className="nav-link">
                Projects
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink exact to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink exact to="contact" className="nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <img src="images/icons/users-4.svg" class="avatar" alt="avatar of me" />
      </div>
    );
  }
}

export default Navbar;
