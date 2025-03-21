import TodoItem from "./TodoItem";

export default function TodoList({ todos }: { todos: any[] }) {
	return (
		<div className="bg-white shadow-md rounded-md p-4">
			{todos.length > 0 ? (
				todos.map((todo, index) => <TodoItem key={`${todo.id}-${index}`} todo={todo} />)
			) : (
				<p className="text-gray-500">Задачи не найдены</p>
			)}
		</div>
	)
}
