import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

class Navbar extends Component {
  render() {
    return (
      <>
        <Nav className="d-flex align-items-center">
          <ul className="nav">
            <li className="nav-item">
              <StyledNavLink exact to="/" className="nav-link">
                Hello
              </StyledNavLink>
            </li>
            <li className="nav-item">
              <StyledNavLink exact to="/projects" className="nav-link">
                Projects
              </StyledNavLink>
            </li>
            <li className="nav-item">
              <StyledNavLink exact to="/about" className="nav-link">
                About
              </StyledNavLink>
            </li>
            <li className="nav-item">
              <StyledNavLink exact to="/contact" className="nav-link">
                Contact
              </StyledNavLink>
            </li>
          </ul>
        </Nav>
        <Avatar src="images/icons/users-4.svg" alt="avatar" />
      </>
    );
  }
}

const Nav = styled.nav`
  justify-content: center;
  position: absolute;
  top: 18px;
  left: 0;
  right: 0;
  z-index: 100;
  font-weight: 700;
  letter-spacing: 1px;

  @media (min-width: 576px) {
    justify-content: flex-start;
    top: auto;
    bottom: 18px;
    left: 150px;
    right: auto;
    font-size: 0.9rem;
  }

  @media (min-width: 768px) {
    left: 200px;
    font-size: 1rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  padding: 0.4rem 0.6rem;
  color: black;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  background-color: white;

  &.active {
    color: white;
    background-color: #333;
  }

  @media (min-width: 576px) {
    padding: 0.4rem 1.25rem;
  }
`;

const Avatar = styled.img`
  position: absolute;
  bottom: 2px;
  left: -30px;
  z-index: 20;
  width: 170px;
  pointer-events: none;

  @media (min-width: 768px) {
    left: -52px;
    width: 280px;
  }
`;

export default Navbar;
