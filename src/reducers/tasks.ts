/**
 * @description Describes the properties of a task
 * @property id - The id of the task
 * @property description - The description of the task
 * @property state - Tells us whether the task has been completed or not
 */
export type TaskInterface = {
  id: number | string;
  description: string;
  state: string;
}[];

const tasks: TaskInterface = [
  {
    id: 1,
    description: 'Take out the trash',
    state: 'uncomplete',
  },
  {
    id: 2,
    description: 'Complete Homework',
    state: 'uncomplete',
  },
  {
    id: 3,
    description: 'Wash the dishes',
    state: 'uncomplete',
  },
  {
    id: 4,
    description: "Buy gift for Father's Day",
    state: 'uncomplete',
  },
];

const taskReducer = (state = tasks, action: { type: string; payload: any }) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload];

    case 'REMOVE_TASK':
      return state.filter((task) => task.id !== action.payload);

    case 'EDIT_TASK':
      // Get the id and new text for the task we are editing
      const { id, newTask }: { id: number | string; newTask: string } =
        action.payload;

      return state.map((task) =>
        // Find the edited task and set the newTask data
        task.id === id ? { ...task, task: newTask } : task
      );

    case 'CLEAR_TASKS':
      return [];

    case 'CHANGE_STATUS':
      const {
        id: taskID,
        newStatus,
      }: { id: string | number; newStatus: string } = action.payload;

      return state.map((task) =>
        // Find the task we are modifying and set the newStatus data
        task.id === taskID ? { ...task, status: newStatus } : task
      );

    default:
      return state;
  }
};

export default taskReducer;
