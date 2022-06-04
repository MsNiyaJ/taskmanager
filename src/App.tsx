import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '.';
import { classNames } from './helpers/classNames';
import Main from './components/Main';
import './global.css';

function App() {
  const display = useSelector((state: RootState) => state.display);

  const appStyles = classNames([
    'App',
    display === 'dark' ? 'dark-theme' : 'light-theme',
  ]);

  return (
    <div className={appStyles}>
      <Main />
    </div>
  );
}

export default App;
