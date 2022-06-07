import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '..';
import { isDarkMode } from '../helpers/isDarkMode';
import { changeStatus } from '../actions';
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/outline';
import { classNames } from '../helpers/classNames';

type TaskType = {
  task: {
    id: string | number;
    description: string;
    complete: boolean;
  };
};

const Task = ({ task }: TaskType) => {
  const { id, description, complete } = task;

  const dispatch = useDispatch();
  const changeCompleteStatus = () => {
    dispatch(changeStatus(id));
  };

  const display = useSelector((state: RootState) => state.display);
  const isComplete = complete;

  // Styles
  const containerClassNames = isDarkMode(display)
    ? 'dark-theme-task'
    : 'light-theme-task';

  const circleClassName = isDarkMode(display)
    ? 'dark-theme-circle'
    : 'light-theme-circle';

  const descriptionClassName = classNames([
    isComplete ? 'strikethrough-text' : '',
    isDarkMode(display) ? 'text-white' : 'text-black',
    'task-description',
  ]);

  return (
    <div className={containerClassNames}>
      <div
        className="cursor-pointer md-icon"
        onClick={() => changeCompleteStatus()}
      >
        {isComplete ? (
          <CheckCircleIcon className="completed-circle" />
        ) : (
          <div className={circleClassName} />
        )}
      </div>
      <div className={descriptionClassName}>{description}</div>
      <InformationCircleIcon className="md-icon" />
    </div>
  );
};

export default Task;
