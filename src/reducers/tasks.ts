/**
 * @description Describes the properties of a task
 * @property id - The id of the task
 * @property description - The description of the task
 * @property complete - Tells us whether the task has been completed or not
 */
export type TaskInterface = {
  id: number | string;
  description: string;
  complete: boolean;
}[];

const tasks: TaskInterface = [
  {
    id: 1,
    description: 'Take out the trash',
    complete: true,
  },
  {
    id: 2,
    description: 'Complete Homework',
    complete: false,
  },
  {
    id: 3,
    description: 'Wash the dishes',
    complete: false,
  },
  {
    id: 4,
    description: "Buy gift for Father's Day",
    complete: false,
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
      const { id: taskID }: { id: string | number } = action.payload;

      return state.map((task) => {
        const isComplete = task.complete;

        // Toggle Complete Status
        const newStatus = isComplete ? false : true;

        // Find the task we are modifying and change status of completion
        return task.id === taskID ? { ...task, complete: newStatus } : task;
      });

    default:
      return state;
  }
};

export default taskReducer;
