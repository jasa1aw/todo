"use client"

import { useTodoStore } from "@/store/todoStore"

export default function Filter() {
	const { filter, setFilter } = useTodoStore()

	return (
		<div className="flex gap-2">
			<button
				className={`px-4 py-2 rounded ${filter === "all" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
				onClick={() => setFilter("all")}
			>
				Все
			</button>
			<button
				className={`px-4 py-2 rounded ${filter === "completed" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
				onClick={() => setFilter("completed")}
			>
				Выполненные
			</button>
			<button
				className={`px-4 py-2 rounded ${filter === "incomplete" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
				onClick={() => setFilter("incomplete")}
			>
				Невыполненные
			</button>
		</div>
	)
}
