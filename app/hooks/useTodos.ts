import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
	userId: number
	id: number
	title: string
	completed: boolean
}

const fetchTodos = async (): Promise<Todo[]> => {
	const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos", {
		params: { _limit: 100 }, // Загружаем 100 задач (если надо изменить — измени здесь)
	})
	return data
}

// Хук для работы с React Query
export const useTodos = () => {
	return useQuery<Todo[]>({
		queryKey: ["todos"],
		queryFn: fetchTodos,
		staleTime: 1000 * 60 * 5, // Кэш на 5 минут
		retry: 2, // Повторный запрос при ошибке (2 попытки)
		retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 30000)
	})
}
