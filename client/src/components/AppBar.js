import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const AppBar = ({ username, isUserLogged, loginUser, logout, showDialog }) => (
  <Navbar>
    <Navbar.Header>
      <Link to="/">
        <Navbar.Brand>
          <div className="nav-title">
            <img width={45} src="logos/camera_logo.svg" alt="Snapterest Logo" />
            {' '}
            Snapterest
          </div>
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to="/" exact={true} isActive={() => false}>
          <NavItem>
            <i className="fa fa-image" aria-hidden="true" />
            {' '}
            All
          </NavItem>
        </LinkContainer>
        {isUserLogged
          ? <LinkContainer to="/mysnaps" exact={true} isActive={() => false}>
              <NavItem>
                <i className="fa fa-camera-retro" aria-hidden="true" />
                {' '}
                My Snaps
              </NavItem>
            </LinkContainer>
          : null}
        {isUserLogged
          ? <NavItem onClick={showDialog}>
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
