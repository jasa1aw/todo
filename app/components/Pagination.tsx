"use client"

import { useTodoStore } from "@/store/todoStore"
import { useMemo } from "react"

type PaginationProps = {
	totalItems: number
	itemsPerPage: number
}

export default function Pagination({ totalItems, itemsPerPage }: PaginationProps) {
	const { currentPage, setCurrentPage } = useTodoStore()
	const totalPages = Math.ceil(totalItems / itemsPerPage)

	const pages = useMemo(() => {
		if (totalPages <= 10) return Array.from({ length: totalPages }, (_, i) => i + 1)

		if (currentPage <= 7) {
			// Если на первых страницах, показываем первые 10 + "..."
			return [...Array.from({ length: 10 }, (_, i) => i + 1), "...", totalPages]
		}

		if (currentPage >= totalPages - 4) {
			// Если ближе к концу, показываем первые 2, "..." и последние 8 страниц
			return [1, "...", ...Array.from({ length: 9 }, (_, i) => totalPages - 8 + i)]
		}

		// Если на 8-й странице или дальше, раскрываем 11 и 12
		return [1, "...", ...Array.from({ length: 5 }, (_, i) => currentPage - 2 + i), "...", totalPages]
	}, [totalPages, currentPage])

	if (totalPages <= 1) return null

	return (
		<div className="flex justify-center gap-2">
			<button
				className="px-4 py-2 rounded-lg bg-blue-500 text-white disabled:opacity-50"
				onClick={() => setCurrentPage(currentPage - 1)}
				disabled={currentPage === 1}
			>
				« Назад
			</button>

			{pages.map((page, index) =>
				page === "..." ? (
					<span key={index} className="px-3 py-2 text-gray-500">
						...
					</span>
				) : (
					<button
						key={page}
						className={`px-3 py-2 rounded-lg ${currentPage === page ? "bg-blue-700 text-white" : "bg-gray-300"}`}
						onClick={() => setCurrentPage(Number(page))}
					>
						{page}
					</button>
				)
			)}

			<button
				className="px-4 py-2 rounded bg-blue-500 text-white disabled:opacity-50"
				onClick={() => setCurrentPage(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				Вперёд »
			</button>
		</div>
	)
}
