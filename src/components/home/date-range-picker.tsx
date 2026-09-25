'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'

const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'] as const

export interface DateRange {
	from: Date | null
	to: Date | null
}

interface DateRangePickerProps {
	value: DateRange
	onChange: (range: DateRange) => void
	month: Date
	onMonthChange: (month: Date) => void
}

function startOfDay (date: Date) {
	return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

function today () {
	return startOfDay(new Date())
}

function isBeforeToday (date: Date) {
	return startOfDay(date).getTime() < today().getTime()
}

function isSameDay (a: Date, b: Date) {
	return (
		a.getFullYear() === b.getFullYear() &&
		a.getMonth() === b.getMonth() &&
		a.getDate() === b.getDate()
	)
}

function addMonths (date: Date, amount: number) {
	return new Date(date.getFullYear(), date.getMonth() + amount, 1)
}

function isSameMonth (a: Date, b: Date) {
	return (
		a.getFullYear() === b.getFullYear() &&
		a.getMonth() === b.getMonth()
	)
}

function getMonthDays (month: Date) {
	const year = month.getFullYear()
	const monthIndex = month.getMonth()
	const firstDay = new Date(year, monthIndex, 1)
	const daysInMonth = new Date(year, monthIndex + 1, 0).getDate()
	const startWeekday = firstDay.getDay()
	const cells: (Date | null)[] = []

	for (let i = 0; i < startWeekday; i += 1) {
		cells.push(null)
	}

	for (let day = 1; day <= daysInMonth; day += 1) {
		cells.push(new Date(year, monthIndex, day))
	}

	while (cells.length % 7 !== 0) {
		cells.push(null)
	}

	return cells
}

function isInRange (date: Date, from: Date | null, to: Date | null) {
	if (!from || !to) {
		return false
	}

	const time = startOfDay(date).getTime()
	const start = startOfDay(from).getTime()
	const end = startOfDay(to).getTime()

	return time > start && time < end
}

function MonthGrid ({
	month,
	value,
	onSelect,
	showPrev,
	showNext,
	onPrev,
	onNext,
	canGoPrev,
}: {
	month: Date
	value: DateRange
	onSelect: (date: Date) => void
	showPrev?: boolean
	showNext?: boolean
	onPrev?: () => void
	onNext?: () => void
	canGoPrev?: boolean
}) {
	const cells = getMonthDays(month)
	const title = month.toLocaleDateString('en-US', {
		month: 'long',
		year: 'numeric',
	})

	return (
		<div className="w-full min-w-0">
			<div className="mb-4 flex items-center justify-between">
				{showPrev ? (
					<button
						type="button"
						aria-label="Previous month"
						onClick={onPrev}
						disabled={canGoPrev === false}
						className="flex size-8 items-center justify-center rounded-full text-[#717171] transition-colors hover:bg-[#f0f0f0] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent"
					>
						<ChevronLeft className="size-4" strokeWidth={1.8} />
					</button>
				) : (
					<span className="size-8" />
				)}
				<p className="text-[0.95rem] font-semibold text-ink">{title}</p>
				{showNext ? (
					<button
						type="button"
						aria-label="Next month"
						onClick={onNext}
						className="flex size-8 items-center justify-center rounded-full text-[#717171] transition-colors hover:bg-[#f0f0f0]"
					>
						<ChevronRight className="size-4" strokeWidth={1.8} />
					</button>
				) : (
					<span className="size-8" />
				)}
			</div>
			<div className="mb-2 grid grid-cols-7 text-center">
				{WEEKDAYS.map((day, index) => (
					<span
						key={`${day}-${index}`}
						className="py-1 text-[0.72rem] font-medium text-[#717171]"
					>
						{day}
					</span>
				))}
			</div>
			<div className="grid grid-cols-7">
				{cells.map((date, index) => {
					if (!date) {
						return <span key={`empty-${index}`} className="h-10" />
					}

					const isPast = isBeforeToday(date)
					const isStart = value.from
						? isSameDay(date, value.from)
						: false
					const isEnd = value.to ? isSameDay(date, value.to) : false
					const inRange = isInRange(date, value.from, value.to)

					return (
						<button
							key={date.toISOString()}
							type="button"
							disabled={isPast}
							aria-disabled={isPast}
							onClick={() => {
								if (!isPast) {
									onSelect(date)
								}
							}}
							className={[
								'relative flex h-10 items-center justify-center text-sm',
								inRange && !isPast ? 'bg-[#f0f0f0]' : '',
								isStart && value.to
									? 'rounded-l-full bg-[#f0f0f0]'
									: '',
								isEnd && value.from
									? 'rounded-r-full bg-[#f0f0f0]'
									: '',
								isPast ? 'cursor-not-allowed' : '',
							]
								.filter(Boolean)
								.join(' ')}
						>
							<span
								className={[
									'flex size-10 items-center justify-center rounded-full transition-colors',
									isPast
										? 'text-[#c4c4c4]'
										: isStart || isEnd
											? 'bg-ink font-medium text-white'
											: 'text-ink hover:bg-[#ebebeb]',
								].join(' ')}
							>
								{date.getDate()}
							</span>
						</button>
					)
				})}
			</div>
		</div>
	)
}

export function DateRangePicker ({
	value,
	onChange,
	month,
	onMonthChange,
}: DateRangePickerProps) {
	const currentMonth = new Date(
		today().getFullYear(),
		today().getMonth(),
		1,
	)
	const canGoPrev = !isSameMonth(month, currentMonth) &&
		month.getTime() > currentMonth.getTime()

	function handleSelect (date: Date) {
		if (isBeforeToday(date)) {
			return
		}

		const selected = startOfDay(date)

		if (!value.from || (value.from && value.to)) {
			onChange({ from: selected, to: null })
			return
		}

		if (selected.getTime() < startOfDay(value.from).getTime()) {
			onChange({ from: selected, to: null })
			return
		}

		onChange({ from: value.from, to: selected })
	}

	function handlePrev () {
		if (!canGoPrev) {
			return
		}

		onMonthChange(addMonths(month, -1))
	}

	function handleNext () {
		onMonthChange(addMonths(month, 1))
	}

	const nextMonth = addMonths(month, 1)

	return (
		<div className="w-full rounded-3xl border border-[#ebebeb] bg-white p-5 shadow-[0_16px_40px_rgba(0,0,0,0.14)] lg:p-6">
			<div className="lg:hidden">
				<MonthGrid
					month={month}
					value={value}
					onSelect={handleSelect}
					showPrev
					showNext
					onPrev={handlePrev}
					onNext={handleNext}
					canGoPrev={canGoPrev}
				/>
			</div>
			<div className="hidden gap-10 lg:grid lg:grid-cols-2">
				<MonthGrid
					month={month}
					value={value}
					onSelect={handleSelect}
					showPrev
					onPrev={handlePrev}
					canGoPrev={canGoPrev}
				/>
				<MonthGrid
					month={nextMonth}
					value={value}
					onSelect={handleSelect}
					showNext
					onNext={handleNext}
				/>
			</div>
		</div>
	)
}

export function formatDateRange (range: DateRange) {
	if (!range.from) {
		return null
	}

	const fromLabel = range.from.toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
	})

	if (!range.to) {
		return fromLabel
	}

	const toLabel = range.to.toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
	})

	return `${fromLabel} - ${toLabel}`
}

export function getNightCount (range: DateRange) {
	if (!range.from || !range.to) {
		return null
	}

	const from = startOfDay(range.from).getTime()
	const to = startOfDay(range.to).getTime()
	const nights = Math.round((to - from) / (1000 * 60 * 60 * 24))

	return nights > 0 ? nights : null
}

export function formatNightCount (range: DateRange) {
	const nights = getNightCount(range)

	if (!nights) {
		return null
	}

	return nights === 1 ? '1 night' : `${nights} nights`
}
