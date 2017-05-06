import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Grid from './Grid';

class App extends Component {
  componentDidMount() {
    // this.props.verifyUserSession();
  }

  loginUser = () => {
    const w = 360;
    const h = 560;
    const left = screen.width / 2 - w / 2;
    const top = screen.height / 2 - h / 2;
    const windowOptions = `width=${w}, height=${h}, top=${top}, left=${left}`;
    const address = process.env.NODE_ENV === 'development'
      ? 'https://localhost:4000'
      : '';
    const authURL = `${address}/auth/twitter`;
    const oAuthPopUp = window.open(
      authURL,
      'Tiwtter Authorization',
      windowOptions,
    );
    // For AutoClosing the popUp once we get an answer
    window.addEventListener(
      'message',
      e => {
        if (e.data === 'closePopUp') {
          oAuthPopUp.close();
          this.verifyUserSession();
          window.removeEventListener('message', function(e) {}, false);
        }
      },
      false,
    );
  };

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <div className="nav-title">
                <img
                  width={45}
                  src="logos/camera_logo.svg"
                  alt="Snapterest Logo"
                />
                {' '}
                Snapterest
              </div>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem>
                <i className="fa fa-image" aria-hidden="true"></i>
                {' '}
                All
              </NavItem>
              <NavItem>
                <i className="fa fa-camera-retro" aria-hidden="true"></i>
                {' '}
                My Snaps
              </NavItem>
              <NavItem>
                <i className="fa fa-plus-circle" aria-hidden="true"></i>
                {' '}
                New
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem title="Logout">
                <i className="fa fa-sign-out" aria-hidden="true"></i>
                {' '}
                Logout
              </NavItem>
              <NavItem onClick={this.loginUser} title="Login">
                <img
                  width={20}
                  src="logos/twitter_logo.svg"
                  alt="Twitter Logo"
                />
                {' '}
                Login
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Grid />
      </div>
    );
  }
}

export default connect(state => ({
  username: state.user.username
}), dispatch => ({

}))(App);
