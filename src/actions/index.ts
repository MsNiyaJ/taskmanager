// Tasks
export const addTask = () => ({
  type: 'ADD_TASK',
});

export const removeTask = (id: number | string) => ({
  type: 'REMOVE_TASK',
  payload: id,
});

export const editTask = (id: number | string, newTask: string) => ({
  type: 'EDIT_TASK',
  payload: { id, newTask },
});

export const clearTasks = () => ({
  type: 'CLEAR_TASKS',
});

export const changeStatus = (id: number | string) => ({
  type: 'CHANGE_STATUS',
  payload: id,
});

// Display Mode
export const toggleDisplayMode = () => ({
  type: 'TOGGLE_DISPLAY_MODE',
});
