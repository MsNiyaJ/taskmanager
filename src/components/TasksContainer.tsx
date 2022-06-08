import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '..';
import { TaskInterface } from '../reducers/tasks';
import Task from './Task';

/**
 * @description The task container will be responsible for holding all tasks
 */
const TasksContainer = () => {
  // Get tasks state from redux store
  const tasks: TaskInterface = useSelector((state: RootState) => state.tasks);

  // Zero State for tasks
  if (tasks.length === 0) {
    return (
      <div style={{ marginTop: '5rem', textAlign: 'center', fontSize: '1.5rem' }}>
        <p>No tasks found!</p>
        <p>
          Click on '+ New' to add a new task.
        </p>
      </div>
    );
  }

  return (
    <div className="task-container">
      {tasks.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </div>
  );
};

export default TasksContainer;
