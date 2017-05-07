import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserSession, sendLogout } from '../actions/user';
import AppBar from '../components/AppBar';
import Grid from './Grid';

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
        <AppBar 
          username={username}
          isUserLogged={isUserLogged}
          loginUser={this.loginUser}
          logout={logout}
        />
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
