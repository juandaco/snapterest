import React, { Component } from 'react';
import { connect } from 'react-redux';

class Grid extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="grid-container">
        THE GRID
      </div>
    );
  }
}

export default connect(null)(Grid);
