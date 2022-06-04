import React from 'react';
import { PlusIcon, SunIcon, MoonIcon } from '@heroicons/react/outline';
import { classNames } from '../helpers/classNames';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '..';
import { toggleDisplayMode } from '../actions';

const Toolbar = () => {
  const display = useSelector((state: RootState) => state.display);

  const dispatch = useDispatch();
  const toggleDisplay = () => dispatch(toggleDisplayMode());

  // Setting the class names for the buttons
  const buttonTheme = classNames([
    display === 'dark' ? 'text-white' : 'text-black',
    display === 'dark' ? 'dark-theme-btn' : 'light-theme-btn',
  ]);

  return (
    <div className="toolbar-container">
      <button className={buttonTheme}>
        <PlusIcon className="sm-icon" />
        New
      </button>
      <div onClick={() => toggleDisplay()}>
        {display === 'dark' ? (
          <SunIcon className="sm-icon" />
        ) : (
          <MoonIcon className="sm-icon text-black" />
        )}
      </div>
      <button className={buttonTheme}>Clear All</button>
    </div>
  );
};

export default Toolbar;
