"use client"

import { useTodoStore } from "@/store/todoStore"

export default function SearchBar() {
	const { searchQuery, setSearchQuery } = useTodoStore()

	return (
		<input
			type="text"
			placeholder="Поиск..."
			value={searchQuery}
			onChange={(e) => setSearchQuery(e.target.value)}
			className="max-w-3xl w-full p-2 border rounded-md"
		/>
	)
}
