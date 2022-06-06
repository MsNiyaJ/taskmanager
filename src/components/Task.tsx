import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '..';
import { isDarkMode } from '../helpers/isDarkMode';
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/outline';

type TaskType = {
  task: {
    id: string | number;
    description: string;
    complete: boolean;
  };
};

const Task = ({ task }: TaskType) => {
  const display = useSelector((state: RootState) => state.display);
  const { description, complete } = task;
  const isComplete = complete;

  // Styles
  const containerClassNames = isDarkMode(display)
    ? 'dark-theme-task'
    : 'light-theme-task';

  const circleClassName = isDarkMode(display)
    ? 'dark-theme-circle'
    : 'light-theme-circle';

  return (
    <div className={containerClassNames}>
      {isComplete ? (
        <CheckCircleIcon className="md-icon completed-circle" />
      ) : (
        <div className={circleClassName} />
      )}
      <div>{description}</div>
      <InformationCircleIcon className="md-icon" />
    </div>
  );
};

export default Task;
