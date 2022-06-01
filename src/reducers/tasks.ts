const taskReducer = (state = [], action: { type: string; payload: any }) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload];

    case 'REMOVE_TASK':
      return state.filter(
        (task: { id: number | string }) => task.id !== action.payload
      );

    case 'EDIT_TASK':
      // Get the id and new text for the task we are editing
      const { id, newTask }: { id: number | string; newTask: string } =
        action.payload;

      return state.map((task: { id: number | string }) =>
        // Find the edited task and set the newTask data
        task.id === id ? { ...task, task: newTask } : task
      );

    case 'CLEAR_TASKS':
      return [];

    default:
      return state;
  }
};

export default taskReducer;
