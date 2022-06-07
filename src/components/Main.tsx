import React from 'react';
import Header from './Header';
import TasksContainer from './TasksContainer';
import Toolbar from './Toolbar';
import Footer from './Footer';

const Main = () => {
  return (
    <div>
      <Header />
      <div className="main-container">
        <Toolbar />
        <TasksContainer />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
