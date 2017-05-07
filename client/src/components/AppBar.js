import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const AppBar = ({ username, isUserLogged, loginUser, logout }) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <div className="nav-title">
          <img width={45} src="logos/camera_logo.svg" alt="Snapterest Logo" />
          {' '}
          Snapterest
        </div>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem>
          <i className="fa fa-image" aria-hidden="true" />
          {' '}
          All
        </NavItem>
        {isUserLogged
          ? <NavItem>
              <i className="fa fa-camera-retro" aria-hidden="true" />
              {' '}
              My Snaps
            </NavItem>
          : null}
        {isUserLogged
          ? <NavItem>
              <i className="fa fa-plus-circle" aria-hidden="true" />
              {' '}
              New
            </NavItem>
          : null}
      </Nav>
      <Nav pullRight>

        {isUserLogged
          ? <NavItem title="Logout" onClick={() => logout()}>
              <i className="fa fa-sign-out" aria-hidden="true" />
              {' '}
              Logout
            </NavItem>
          : <NavItem title="Login" onClick={loginUser}>
              <img width={20} src="logos/twitter_logo.svg" alt="Twitter Logo" />
              {' '}
              Login
            </NavItem>}
      </Nav>
    </Navbar.Collapse>
    {isUserLogged ? <p id="username">{`@${username}`}</p> : null}
  </Navbar>
);

export default AppBar;
