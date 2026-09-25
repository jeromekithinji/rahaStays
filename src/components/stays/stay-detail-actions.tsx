'use client'

import { Share } from 'lucide-react'
import { useEffect, useState } from 'react'

interface StayDetailActionsProps {
	title: string
}

export function StayDetailActions ({ title }: StayDetailActionsProps) {
	const [showToast, setShowToast] = useState(false)

	useEffect(() => {
		if (!showToast) return

		const timeout = window.setTimeout(() => {
			setShowToast(false)
		}, 2200)

		return () => window.clearTimeout(timeout)
	}, [showToast])

	async function handleShare () {
		await navigator.clipboard.writeText(window.location.href)
		setShowToast(true)
	}

	return (
		<>
			<button
				type="button"
				onClick={handleShare}
				aria-label={`Copy link to ${title}`}
				className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-ink underline-offset-2 hover:bg-[#efece4] hover:underline"
			>
				<Share className="size-4" strokeWidth={1.75} />
				Share
			</button>
			{showToast ? (
				<div
					role="status"
					aria-live="polite"
					className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-gold-soft shadow-lg"
				>
					Link copied
				</div>
			) : null}
		</>
	)
}
