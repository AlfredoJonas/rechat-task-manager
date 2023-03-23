import { createContext, Dispatch, useContext, useReducer } from 'react';

// Define all the interfaces and types neccessary for build context and reducers
// those will be also used on the functional components as props types

export interface TaskItemInterface {
	id: number;
	title: string;
	description: string;
	status: string;
	oldStatus?: string;
}

interface TaskStatusesInterface {
	id: number;
	name: string;
	rules: number[];
}

export interface TaskContextType {
	taskList: TaskItemInterface[];
	statuses: TaskStatusesInterface[];
}


export const TasksContext = createContext<TaskContextType>({} as TaskContextType);

export type Action = { type: "NEW_TASK" | "UPDATE_TASK"; payload: { task: TaskItemInterface }};
export const TasksDispatchContext = createContext((() => {}) as Dispatch<Action>);

const statuses = [
	{
		id: 0,
		name: "ToDo",
		rules: [1, 3]
	},
	{
		id: 1,
		name: "Blocked",
		rules: [2]
	},
	{
		id: 2,
		name: "InProgress",
		rules: [0]
	},
	{
		id: 3,
		name: "InQA",
		rules: [2]
	},
	{
		id: 4,
		name: "Done",
		rules: [3]
	},
	{
		id: 5,
		name: "Deployed",
		rules: [4]
	},
];

export const initialState = {
	taskList: [],
	statuses: statuses,
};

const reducer = (state: TaskContextType, action: Action) => {
	switch (action.type) {
		case 'NEW_TASK':
			const {
				payload: { task: newTask },
			} = action;
			const { taskList: currentList } = state;
			currentList.push({
				...newTask,
				id: currentList.length + 1
			});
			return {
				...state,
				taskList: currentList,
			};
		case 'UPDATE_TASK':
			const {
				payload: { task: newTaskToUpdate, task: { id: taskId } },
			} = action;
			const { taskList: currentTaskList } = state;
			const newTaskList = currentTaskList.map((task: TaskItemInterface) => {
				if (task.id === taskId) {
					return newTaskToUpdate;
				}
				return task;
			});
			return {
				...state,
				taskList: newTaskList
			};
		default: {
			throw new Error(`Unhandled action type: ${action.type}`);
		}
	}
};

// Defines it to use it directly on the main App and render each JSX component
export default function TaskAppProvider({ children, initialStateAux=null}: {children: JSX.Element, initialStateAux?: TaskContextType | null}) {
	const [tasks, dispatch] = useReducer(reducer, initialStateAux || initialState);
	return (
		<TasksContext.Provider value={tasks}>
			<TasksDispatchContext.Provider value={dispatch}>
				{children}
			</TasksDispatchContext.Provider>
		</TasksContext.Provider>
	);
}

export const useTaskState = () : TaskContextType => {
	const context = useContext(TasksContext);
	if (context === undefined) {
		throw new Error('useTaskState must be used within a TaskAppProvider');
	}
	return context;
};

export const useTaskDispatch = (): Dispatch<Action> => {
	const context = useContext(TasksDispatchContext);
	if (context === undefined) {
		throw new Error('useTaskDispatch must be used within a TaskAppProvider');
	}
	return context;
};
