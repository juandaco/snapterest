import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchIP } from '../actions';
import RouterDemo from '../components/RouterDemo';

class App extends Component {
  componentDidMount() {
    this.props.fetchIP();
  }

  render() {
    const { ip, isFetching } = this.props;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div>
          <h2>Welcome to my MERN Boilerplate</h2>
        </div>
        <p>
          This is a simple working component{' '}
        </p>
        {isFetching
          ? <p style={{ color: 'red' }}>Loading</p>
          : <p style={{ color: 'green' }}>Your IP address is: {ip}</p>}
        <RouterDemo />
        <p style={{textAlign: 'center'}}>
          For Syncing React Router with Redux Checkout <br/>
          <a
            href="https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux"
            target="_blank"
          >
            react-router-redux
          </a>
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ip: state.ip,
    isFetching: state.isFetching,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchIP: () => {
    dispatch(fetchIP());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
