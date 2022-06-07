import React from 'react';
import { PlusIcon, SunIcon, MoonIcon } from '@heroicons/react/outline';
import { classNames } from '../helpers/classNames';
import { isDarkMode } from '../helpers/isDarkMode';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '..';
import { toggleDisplayMode, clearTasks, addTask } from '../actions';

const Toolbar = () => {
  const display = useSelector((state: RootState) => state.display);

  const dispatch = useDispatch();
  const toggleDisplay = () => dispatch(toggleDisplayMode());
  const addNewTask = () => dispatch(addTask());
  const clearAllTasks = () => {
    const isExecuted = window.confirm(
      'Are you sure you want to clear all tasks?'
    );
    if (isExecuted) {
      dispatch(clearTasks());
    }
  };

  // Setting the class names for the buttons
  const buttonTheme = classNames([
    isDarkMode(display) ? 'text-white' : 'text-black',
    isDarkMode(display) ? 'dark-theme-btn' : 'light-theme-btn',
    'cursor-pointer',
  ]);

  return (
    <div className="toolbar-container">
      <button
        className={buttonTheme}
        onClick={() => {
          addNewTask();
        }}
      >
        <PlusIcon className="sm-icon" />
        New
      </button>
      <div className="cursor-pointer" onClick={() => toggleDisplay()}>
        {isDarkMode(display) ? (
          <SunIcon className="md-icon" />
        ) : (
          <MoonIcon className="md-icon text-black" />
        )}
      </div>
      <button className={buttonTheme} onClick={() => clearAllTasks()}>
        Clear All
      </button>
    </div>
  );
};

export default Toolbar;
