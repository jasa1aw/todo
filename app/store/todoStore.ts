import { create } from "zustand"

type Filter = "all" | "completed" | "incomplete"

export type Todo = {
	id: number
	title: string
	completed: boolean
}

interface TodoState {
	todos: Todo[]
	filter: Filter
	searchQuery: string
	currentPage: number
	itemsPerPage: number
	setCurrentPage: (page: number) => void
	setItemsPerPage: (count: number) => void
	setFilter: (filter: Filter) => void
	setSearchQuery: (query: string) => void
	setTodos: (todos: Todo[]) => void
	toggleComplete: (id: number) => void
}

export const useTodoStore = create<TodoState>((set) => ({
	todos: [], // Список задач
	filter: "all",
	searchQuery: "",
	currentPage: 1,
	itemsPerPage: 10, // По умолчанию 10 задач на страницу
	setCurrentPage: (page) => set({ currentPage: page }),
	setItemsPerPage: (count) => set({ itemsPerPage: count }),
	setFilter: (filter) => set({ filter }),
	setSearchQuery: (query) => set({ searchQuery: query }),
	setTodos: (todos) => set({ todos }),
	toggleComplete: (id) =>
		set((state) => ({
			todos: state.todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			),
		})),
}))
