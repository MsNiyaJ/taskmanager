/**
 * @description Describes the properties of a task
 * @property id - The id of the task
 * @property description - The description of the task
 */
export type TaskInterface = {
  id: number | string;
  description: string;
}[];

const tasks: TaskInterface = [
  {
    id: 1,
    description: 'Take out the trash',
  },
  {
    id: 2,
    description: 'Complete Homework',
  },
  {
    id: 3,
    description: 'Wash the dishes',
  },
  {
    id: 4,
    description: "Buy gift for Father's Day",
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
