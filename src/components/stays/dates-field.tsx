'use client'

import {
	useEffect,
	useEffectEvent,
	useId,
	useRef,
	useState,
	type KeyboardEvent,
	type MouseEvent,
} from 'react'
import { ChevronDown, X } from 'lucide-react'

import {
	DateRangePicker,
	formatDateRange,
	formatNightCount,
	type DateRange,
} from '@/components/home/date-range-picker'

interface DatesFieldProps {
	id: string
	label: string
	value: DateRange
	onChange: (value: DateRange) => void
}

export function DatesField ({
	id,
	label,
	value,
	onChange,
}: DatesFieldProps) {
	const listId = useId()
	const rootRef = useRef<HTMLDivElement>(null)
	const [isOpen, setIsOpen] = useState(false)
	const [calendarMonth, setCalendarMonth] = useState(() => {
		if (value.from) {
			return new Date(value.from.getFullYear(), value.from.getMonth(), 1)
		}

		const now = new Date()
		return new Date(now.getFullYear(), now.getMonth(), 1)
	})
	const dateLabel = formatDateRange(value)
	const nightsLabel = formatNightCount(value)

	const handleDocumentPointerDown = useEffectEvent((event: Event) => {
		const target = event.target as Node | null

		if (!target || !rootRef.current?.contains(target)) {
			setIsOpen(false)
		}
	})

	useEffect(() => {
		document.addEventListener('pointerdown', handleDocumentPointerDown)

		return () => {
			document.removeEventListener(
				'pointerdown',
				handleDocumentPointerDown,
			)
		}
	}, [])

	function handleClear (event: MouseEvent | KeyboardEvent) {
		event.preventDefault()
		event.stopPropagation()
		onChange({ from: null, to: null })
	}

	return (
		<div ref={rootRef} className="relative min-w-0">
			<span className="mb-1.5 block text-sm text-muted-foreground">
				{label}
			</span>
			{value.from ? (
				<input
					type="hidden"
					name="from"
					value={value.from.toISOString().slice(0, 10)}
				/>
			) : null}
			{value.to ? (
				<input
					type="hidden"
					name="to"
					value={value.to.toISOString().slice(0, 10)}
				/>
			) : null}
			<button
				id={id}
				type="button"
				aria-haspopup="dialog"
				aria-expanded={isOpen}
				aria-controls={listId}
				onClick={() => setIsOpen((current) => !current)}
				className={[
					'flex h-14 w-full items-center justify-between rounded-md border bg-white px-3 py-1.5 text-left outline-none transition-colors',
					isOpen ? 'border-forest' : 'border-[#e6e3db]',
					dateLabel ? 'text-ink' : 'text-[#8a8a86]',
				].join(' ')}
			>
				<span className="min-w-0 flex-1">
					<span className="block truncate text-[0.95rem] leading-tight">
						{dateLabel ?? 'Add dates'}
					</span>
					{nightsLabel ? (
						<span className="mt-0.5 block truncate text-xs leading-tight text-muted-foreground">
							{nightsLabel}
						</span>
					) : null}
				</span>
				<span className="flex shrink-0 items-center gap-1.5">
					{dateLabel ? (
						<span
							role="button"
							tabIndex={0}
							aria-label="Clear dates"
							onClick={handleClear}
							onKeyDown={(event) => {
								if (event.key === 'Enter' || event.key === ' ') {
									handleClear(event)
								}
							}}
							className="rounded-full p-0.5 text-[#8a8a86] hover:bg-[#f0eee8] hover:text-ink"
						>
							<X className="size-3.5" strokeWidth={2} />
						</span>
					) : null}
					<ChevronDown
						aria-hidden="true"
						className={[
							'size-4 text-[#8a8a86] transition-transform',
							isOpen ? 'rotate-180' : '',
						].join(' ')}
						strokeWidth={1.6}
					/>
				</span>
			</button>
			{isOpen ? (
				<div
					id={listId}
					role="dialog"
					aria-label={label}
					className="absolute top-[calc(100%+0.5rem)] left-0 z-30 w-[min(100vw-2.5rem,42rem)]"
				>
					<DateRangePicker
						value={value}
						onChange={onChange}
						month={calendarMonth}
						onMonthChange={setCalendarMonth}
					/>
				</div>
			) : null}
		</div>
	)
}
