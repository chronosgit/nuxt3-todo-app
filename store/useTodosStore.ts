import type Todo from '~/interfaces/features/todos/Todo';

export default function () {
	const todos = useState<Todo[]>('todos', () => []);

	const addTodo = (newTodo: Todo) => {
		if (!isTodo(newTodo)) {
			throw createError({ message: 'Argument newTodo is not of type Todo' });
		}

		todos.value.push(newTodo);
	};

	const removeTodo = (todoId: string) => {
		if (typeof todoId !== 'string') {
			throw createError({ message: "Todo's id must be a string" });
		}

		const todoToRemoveArrIndex = todos.value.findIndex((t) => t.id === todoId);
		if (todoToRemoveArrIndex === -1) {
			throw createError({ message: `Todo with id ${todoId} wasn't found` });
		}

		todos.value.splice(todoToRemoveArrIndex, 1);
	};

	const toggleTodoCompleteness = (todoId: string) => {
		if (typeof todoId !== 'string') {
			throw createError({ message: "Todo's id must be a string" });
		}

		const todo = todos.value.find((t) => t.id === todoId);
		if (todo == null) {
			throw createError({ message: `Todo with id ${todoId} wasn't found` });
		}

		todo.isCompleted = !todo.isCompleted;
	};

	const isTodo = (o: unknown) => {
		if (o == null || typeof o !== 'object') return false;

		if (
			!hasOwnProperty(o, 'id') ||
			!hasOwnProperty(o, 'content') ||
			!hasOwnProperty(o, 'isCompleted')
		) {
			return false;
		}

		return true;
	};

	return { todos, isTodo, addTodo, removeTodo, toggleTodoCompleteness };
}
