import React from 'react';

type TaskType = {
  task: {
    id: string | number;
    description: string;
  };
};

const Task = ({ task }: TaskType) => {
  const { description } = task;
  return <div className="task">{description}</div>;
};

export default Task;
