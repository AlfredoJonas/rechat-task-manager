import { createContext, Dispatch, useContext, useReducer } from 'react';

// Define all the interfaces and types neccessary for build context and reducers
// those will be also used on the functional components as props types

export interface TaskItemInterface {
	id: number;
	title: string;
	description: string;
	status: string;
}

type StatusesType = "ToDo" | "Blocked" | "InProgress" | "InQA" | "Done" | "Deployed";

interface TaskStatusesInterface {
	id: number;
	name: StatusesType;
	rules: Array<number>;
}

export interface TaskContextType {
	taskList: Array<TaskItemInterface>;
	statuses: Array<TaskStatusesInterface>;
}


export const TasksContext = createContext<TaskContextType>({} as TaskContextType);

export type Action = { type: "NEW_TASK" | "UPDATE_TASK"; payload: any };
export const TasksDispatchContext = createContext((() => {}) as Dispatch<Action>);

const initialState = {
	taskList: [],
	statuses: [
		{
			id: 0,
			name: "ToDo",
			rules: []
		},
		{
			id: 1,
			name: "Blocked",
			rules: []
		},
		{
			id: 2,
			name: "InProgress",
			rules: []
		},
		{
			id: 3,
			name: "InQA",
			rules: []
		},
		{
			id: 4,
			name: "Done",
			rules: []
		},
		{
			id: 5,
			name: "Deployed",
			rules: []
		},
	],
};

const reducer = (state: any, action: any) => {
	switch (action.type) {
		case 'NEW_TASK':
			const {
				payload: { task: newTask },
			} = action;
			const { taskList: currentList } = state;
			currentList.push({
				id: currentList.length + 1,
				...newTask
			});
			return {
				...state,
				taskList: currentList,
			};
		case 'UPDATE_TASK':
			const { taskList } = state;

			return {
				...state,
				taskList
			};
		default: {
			throw new Error(`Unhandled action type: ${action.type}`);
		}
	}
};

// Defines it to use it directly on the main App and render each JSX component
export default function TaskAppProvider({ children }: {children: JSX.Element}) {
	const [tasks, dispatch] = useReducer(reducer, initialState);
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
