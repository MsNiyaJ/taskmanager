import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '..';
import { classNames } from '../helpers/classNames';
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/outline';

type TaskType = {
  task: {
    id: string | number;
    description: string;
    state: string;
  };
};

const Task = ({ task }: TaskType) => {
  const display = useSelector((state: RootState) => state.display);

  const styles = classNames([
    display === 'dark' ? 'dark-theme-task' : 'light-theme-task',
    'task',
  ]);

  const { description } = task;

  return (
    <div className={styles}>
      <CheckCircleIcon className="md-icon" />
      <div>{description}</div>
      <InformationCircleIcon className="md-icon" />
    </div>
  );
};

export default Task;
