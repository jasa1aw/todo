'use client'
import Loader from '@/components/Loader';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams, useRouter } from 'next/navigation';

const fetchTodo = async (id: string) => {
	const { data } = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
	return data
}

export default function TodoDetails() {
	const router = useRouter()
	const { id } = useParams()
	const { data: todo, isLoading, isError } = useQuery({
		queryKey: ["todo", id],
		queryFn: () => fetchTodo(id as string),
		enabled: !!id,
	})

	if (isLoading) return <Loader />
	if (isError) return <p>Ошибка загрузки</p>

	return (
		<div className="max-w-xl mx-auto mt-8 p-4 bg-white shadow-lg rounded-md">
			<button className='border rounded-md px-1 border-green-400 ' onClick={() => router.push('/')}> &#10508; Назад</button>
			<h1 className="text-xl font-bold">{todo.title}</h1>
			<p>ID пользователя: {todo.userId}</p>
			<p>Статус: {todo.completed ? "Выполнено" : "Не выполнено"}</p>
		</div>
	)
}
