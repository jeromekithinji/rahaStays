'use client'

import {
	useEffect,
	useEffectEvent,
	useRef,
	useState,
	type FormEvent,
} from 'react'
import { Search, X } from 'lucide-react'

import {
	DateRangePicker,
	formatDateRange,
	type DateRange,
} from '@/components/home/date-range-picker'
import {
	formatGuestLabel,
	GuestPicker,
	type GuestCounts,
} from '@/components/home/guest-picker'

type ActivePanel = 'when' | 'guests' | null

const EMPTY_GUESTS: GuestCounts = {
	adults: 0,
	children: 0,
	infants: 0,
}

export function StaySearch () {
	const rootRef = useRef<HTMLDivElement>(null)
	const [activePanel, setActivePanel] = useState<ActivePanel>(null)
	const [location, setLocation] = useState('')
	const [dateRange, setDateRange] = useState<DateRange>({
		from: null,
		to: null,
	})
	const [guests, setGuests] = useState<GuestCounts>(EMPTY_GUESTS)
	const [calendarMonth, setCalendarMonth] = useState(() => {
		const now = new Date()
		return new Date(now.getFullYear(), now.getMonth(), 1)
	})

	const dateLabel = formatDateRange(dateRange)
	const guestLabel = formatGuestLabel(guests)

	const handleDocumentPointerDown = useEffectEvent((event: Event) => {
		const target = event.target as Node | null

		if (!target || !rootRef.current?.contains(target)) {
			setActivePanel(null)
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

	function handleSubmit (event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		setActivePanel(null)

		const params = new URLSearchParams()

		if (location.trim()) {
			params.set('location', location.trim())
		}

		if (dateRange.from) {
			params.set('from', dateRange.from.toISOString().slice(0, 10))
		}

		if (dateRange.to) {
			params.set('to', dateRange.to.toISOString().slice(0, 10))
		}

		const guestTotal = guests.adults + guests.children

		if (guestTotal > 0) {
			params.set('guests', String(guestTotal))
		}

		const query = params.toString()
		window.location.href = query ? `/stays?${query}` : '/stays'
	}

	function handleTogglePanel (panel: Exclude<ActivePanel, null>) {
		setActivePanel((current) => (current === panel ? null : panel))
	}

	function handleClearDates () {
		setDateRange({ from: null, to: null })
	}

	function handleClearGuests () {
		setGuests(EMPTY_GUESTS)
	}

	return (
		<div ref={rootRef} className="relative z-50 mx-auto w-full max-w-[720px]">
			<form
				onSubmit={handleSubmit}
				className="flex w-full items-center rounded-full bg-white py-1.5 pr-1.5 pl-4 shadow-[0_10px_30px_rgba(16,24,16,0.18)] lg:py-2 lg:pr-2 lg:pl-5"
			>
				<label className="flex min-w-0 flex-[1.15] cursor-text items-center gap-2.5">
					<Search
						aria-hidden="true"
						className="size-[1.15rem] shrink-0 text-[#8A8A86]"
						strokeWidth={1.6}
					/>
					<span className="min-w-0 flex-1">
						<span className="block text-[13px] font-semibold leading-none text-ink">
							Where
						</span>
						<input
							type="search"
							name="location"
							value={location}
							onChange={(event) =>
								setLocation(event.target.value)
							}
							onFocus={() => setActivePanel(null)}
							placeholder="Nairobi, Kenya"
							className="mt-1 w-full bg-transparent text-[15px] leading-snug text-ink outline-none placeholder:text-[#8A8A86]"
						/>
					</span>
				</label>
				<div
					className={[
						'relative hidden min-w-0 flex-1 items-center border-l border-[#e6e3db] lg:flex',
						activePanel === 'when'
							? 'rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]'
							: '',
					]
						.filter(Boolean)
						.join(' ')}
				>
					<button
						type="button"
						onClick={() => handleTogglePanel('when')}
						aria-expanded={activePanel === 'when'}
						className="min-w-0 flex-1 cursor-pointer px-4 py-1.5 text-left"
					>
						<span className="block text-[13px] font-semibold leading-none text-ink">
							When
						</span>
						<span
							className={[
								'mt-1 block truncate text-[15px] leading-snug',
								dateLabel
									? 'font-medium text-ink'
									: 'text-[#8A8A86]',
							].join(' ')}
						>
							{dateLabel ?? 'Add dates'}
						</span>
					</button>
					{dateLabel ? (
						<button
							type="button"
							aria-label="Clear dates"
							onClick={handleClearDates}
							className="mr-2 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#ebebeb] text-ink"
						>
							<X className="size-3" strokeWidth={2.4} />
						</button>
					) : null}
				</div>
				<div
					className={[
						'relative hidden min-w-0 flex-1 items-center border-l border-[#e6e3db] lg:flex',
						activePanel === 'guests'
							? 'rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]'
							: '',
					]
						.filter(Boolean)
						.join(' ')}
				>
					<button
						type="button"
						onClick={() => handleTogglePanel('guests')}
						aria-expanded={activePanel === 'guests'}
						className="min-w-0 flex-1 cursor-pointer px-4 py-1.5 text-left"
					>
						<span className="block text-[13px] font-semibold leading-none text-ink">
							Guests
						</span>
						<span
							className={[
								'mt-1 block truncate text-[15px] leading-snug',
								guestLabel
									? 'font-medium text-ink'
									: 'text-[#8A8A86]',
							].join(' ')}
						>
							{guestLabel ?? 'Add guests'}
						</span>
					</button>
					{guestLabel ? (
						<button
							type="button"
							aria-label="Clear guests"
							onClick={handleClearGuests}
							className="mr-2 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#ebebeb] text-ink"
						>
							<X className="size-3" strokeWidth={2.4} />
						</button>
					) : null}
				</div>
				<button
					type="submit"
					aria-label="Search stays"
					className="ml-1 flex size-11 shrink-0 items-center justify-center rounded-full bg-forest text-gold-soft lg:h-11 lg:w-auto lg:gap-2 lg:px-5"
				>
					<Search className="size-4" strokeWidth={2.2} />
					<span className="hidden text-[0.95rem] font-medium lg:inline">
						Search
					</span>
				</button>
			</form>
			{activePanel === 'when' ? (
				<div className="absolute top-[calc(100%+0.75rem)] right-0 left-0 z-50 hidden lg:block">
					<DateRangePicker
						value={dateRange}
						onChange={setDateRange}
						month={calendarMonth}
						onMonthChange={setCalendarMonth}
					/>
				</div>
			) : null}
			{activePanel === 'guests' ? (
				<div className="absolute top-[calc(100%+0.75rem)] right-0 z-50 hidden w-[min(100%,360px)] lg:block">
					<GuestPicker value={guests} onChange={setGuests} />
				</div>
			) : null}
		</div>
	)
}
