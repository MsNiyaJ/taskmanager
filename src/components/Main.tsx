import React from 'react';
import Header from './Header';
import Toolbar from './Toolbar';

const Main = () => {
  return (
    <div>
      <Header />
      <div className="main-container">
        <Toolbar />
      </div>
    </div>
  );
};

export default Main;
