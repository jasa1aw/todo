import Link from "next/link";
import { useTodoStore } from "@/store/todoStore";

interface TodoProps {
	todo: { id: number; title: string; completed: boolean };
}

export default function TodoItem({ todo }: TodoProps) {
	const { toggleComplete } = useTodoStore();

	return (
		<div className="flex justify-between p-3 border-b hover:bg-gray-100">
			<label className="flex items-center gap-2 cursor-pointer">
				<input
					type="checkbox"
					checked={todo.completed}
					onChange={() => toggleComplete(todo.id)}
					className="w-5 h-5"
				/>
				<Link
					href={`/todos/${todo.id}`}
					className={`hover:underline ${todo.completed ? "line-through text-gray-500" : ""}`}
				>
					{todo.title}
				</Link>
			</label>
			<span className={todo.completed ? "text-green-500" : "text-red-500"}>
				{todo.completed ? "✓" : "✗"}
			</span>
		</div>
	);
}