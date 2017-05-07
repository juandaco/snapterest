import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Grid from './Grid';
import { getUserSession, sendLogout } from '../actions/user';

class App extends Component {
  componentDidMount() {
    this.props.getUserSession();
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
          this.props.getUserSession();
          window.removeEventListener('message', function(e) {}, false);
        }
      },
      false,
    );
  };

  render() {
    const { username, isUserLogged, logout } = this.props;
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
                <i className="fa fa-image" aria-hidden="true" />
                {' '}
                All
              </NavItem>
              <NavItem>
                <i className="fa fa-camera-retro" aria-hidden="true" />
                {' '}
                My Snaps
              </NavItem>
              <NavItem>
                <i className="fa fa-plus-circle" aria-hidden="true" />
                {' '}
                New
              </NavItem>
            </Nav>
            <Nav pullRight>
              {isUserLogged ? <NavItem disabled>@{username}</NavItem> : null}
              {isUserLogged
                ? <NavItem title="Logout" onClick={() => logout()}>
                    <i className="fa fa-sign-out" aria-hidden="true" />
                    {' '}
                    Logout
                  </NavItem>
                : <NavItem title="Login" onClick={this.loginUser}>
                    <img
                      width={20}
                      src="logos/twitter_logo.svg"
                      alt="Twitter Logo"
                    />
                    {' '}
                    Login
                  </NavItem>}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Grid />
      </div>
    );
  }
}

export default connect(
  state => ({
    username: state.user.username,
    isUserLogged: Boolean(state.user.username),
  }),
  dispatch => ({
    getUserSession() {
      dispatch(getUserSession());
    },
    logout() {
      dispatch(sendLogout());
    },
    getPictures() {},
  }),
)(App);
