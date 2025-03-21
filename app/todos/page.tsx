"use client"

import { useTodos } from "@/hooks/useTodos";
import { useTodoStore } from "@/store/todoStore";
import TodoList from "@/components/TodoList";
import SearchBar from "@/components/SearchBar";
import Pagination from "@/components/Pagination";
import Filter from "@/components/Filter";
import Loader from "@/components/Loader";
import { useEffect } from 'react'

const ITEMS_PER_PAGE = 10

export default function TodosPage() {
	const { data: todos = [], isLoading, isError } = useTodos()
	const { filter, searchQuery, currentPage} = useTodoStore()

	// useEffect(() => {
	// 	if (todos.length > 0) {
	// 		setTodos(todos)
	// 	}
	// }, [todos, setTodos])

	if (isLoading) return <Loader />
	if (isError) return <p className="text-red-500">Ошибка загрузки данных</p>

	const filteredTodos = todos
		.filter((todo) => {
			if (filter === "completed") return todo.completed
			if (filter === "incomplete") return !todo.completed
			return true
		})
		.filter((todo) => todo.title.toLowerCase().includes(searchQuery.toLowerCase()))

	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
	const paginatedTodos = filteredTodos.slice(startIndex, startIndex + ITEMS_PER_PAGE)

	return (
		<div className="max-w-4xl flex flex-col justify-center mx-auto p-4  gap-5">
			<SearchBar />
			<Filter />
			<TodoList todos={paginatedTodos} />
			<Pagination totalItems={filteredTodos.length} itemsPerPage={ITEMS_PER_PAGE} />
		</div>
	)
}
