import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '..';
import { isDarkMode } from '../helpers/isDarkMode';
import { classNames } from '../helpers/classNames';
import { changeStatus, editTask, removeTask } from '../actions';
import { CheckCircleIcon, TrashIcon } from '@heroicons/react/outline';

type TaskType = {
  task: {
    id: string | number;
    description: string;
    complete: boolean;
  };
};

const Task = ({ task }: TaskType) => {
  const { id, description, complete } = task;
  const [value, setValue] = React.useState(description);

  // Change the task's description when the user types in the input
  const onChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setValue(e.target.value);
  };

  const dispatch = useDispatch();
  const changeCompleteStatus = () => dispatch(changeStatus(id));
  const editTaskDescription = () => dispatch(editTask(id, value));
  const deleteTask = () => dispatch(removeTask(id));

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
          <CheckCircleIcon className="completed-circle md-icon" />
        ) : (
          <div className={circleClassName} />
        )}
      </div>
      <textarea
        autoFocus={true}
        disabled={isComplete} // Only edit the task if it's not complete
        value={value}
        className={descriptionClassName}
        onChange={onChange}
        onBlur={() => editTaskDescription()} // Save the task when the user clicks out of the input
        onKeyDown={() => editTaskDescription()} // Save the task when the user presses enter
      />
      <TrashIcon
        className="md-icon cursor-pointer"
        onClick={() => deleteTask()}
      />
    </div>
  );
};

export default Task;
