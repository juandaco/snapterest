import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserSession, sendLogout } from '../actions/user';
import { sendFetchPictures, sendAddPicture } from '../actions/pictures';
import {
  showNewDialog,
  hideNewDialog,
  showAboutDialog,
  hideAboutDialog,
} from '../actions/ui';
import AppBar from '../components/AppBar';
import Gallery from './Gallery';
import NewDialog from './NewDialog';
import AboutDialog from '../components/AboutDialog';

class App extends Component {
  componentDidMount() {
    this.props.getUserSession();
    this.props.getPictures();
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

  handleLogout = () => {
    this.props.history.push('/');
    this.props.logout();
  };

  render() {
    const {
      username,
      isUserLogged,
      displayNewDialog,
      showNewDialog,
      closeNewDialog,
      addPicture,
      displayAboutDialog,
      showAboutDialog,
      closeAboutDialog,
    } = this.props;

    return (
      <div className="modal-container">
        <AppBar
          username={username}
          isUserLogged={isUserLogged}
          loginUser={this.loginUser}
          logout={this.handleLogout}
          showNewDialog={showNewDialog}
          showAboutDialog={showAboutDialog}
        />

        <Gallery path={window.location.pathname} />

        <NewDialog
          displayNewDialog={displayNewDialog}
          closeNewDialog={closeNewDialog}
          addPicture={addPicture}
        />

        <AboutDialog 
          displayAboutDialog={displayAboutDialog}
          closeAboutDialog={closeAboutDialog}
        />
      </div>
    );
  }
}

export default connect(
  state => ({
    username: state.user.username,
    isUserLogged: Boolean(state.user.username),
    displayNewDialog: state.ui.newDialog,
    displayAboutDialog: state.ui.aboutDialog,
  }),
  dispatch => ({
    getUserSession() {
      dispatch(getUserSession());
    },
    getPictures() {
      dispatch(sendFetchPictures());
    },
    logout() {
      dispatch(sendLogout());
    },
    showNewDialog() {
      dispatch(showNewDialog());
    },
    closeNewDialog() {
      dispatch(hideNewDialog());
    },
    showAboutDialog() {
      dispatch(showAboutDialog());
    },
    closeAboutDialog() {
      dispatch(hideAboutDialog());
    },
    addPicture(picture) {
      dispatch(sendAddPicture(picture));
    },
  }),
)(App);
