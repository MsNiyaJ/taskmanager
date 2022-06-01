// Tasks
export const addTask = (task: string) => ({
  type: 'ADD_TASK',
  payload: task,
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

// Display Mode
export const setDisplayMode = (mode: string) => ({
  type: 'SET_DISPLAY_MODE',
  payload: mode,
});