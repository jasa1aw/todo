import Link from "next/link"

interface TodoProps {
	todo: { id: number; title: string; completed: boolean }
}

export default function TodoItem({ todo }: TodoProps) {
	return (
		<div className="flex justify-between p-3 border-b hover:bg-gray-100">
			<Link href={`/todos/${todo.id}`} className="text-blue-600">
				{todo.title}
			</Link>
			<span className={todo.completed ? "text-green-500" : "text-red-500"}>
				{todo.completed ? "✓" : "✗"}
			</span>
		</div>
	)
}
