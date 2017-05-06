/*
  Folder for Presentational Components
*/
import React from 'react';
import { Link } from 'react-router-dom';

const RouterDemo = () => (
  <div
    style={{
      display: 'inherit',
      flexDirection: 'column',
      alignItems: 'inherit',
      textAlign: 'center',
      border: '1px solid black',
      padding: 10,
    }}
  >
    <p>
      RouterDemo Component
      {' '}
      <br />
      <span style={{ fontSize: 12 }}>(Not-Syncd wit Redux)</span>
    </p>
    <div>
      <Link to="/">
        <button>
          Home
        </button>
      </Link>
      <Link to="/about">
        <button>
          About
        </button>
      </Link>
    </div>
  </div>
);

export default RouterDemo;
