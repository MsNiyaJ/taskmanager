import React from 'react';
import Header from './Header';
import TasksContainer from './TasksContainer';
import Toolbar from './Toolbar';

const Main = () => {
  return (
    <div>
      <Header />
      <div className="main-container">
        <Toolbar />
        <TasksContainer />
      </div>
    </div>
  );
};

export default Main;
