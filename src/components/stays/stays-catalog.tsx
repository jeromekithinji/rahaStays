'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'

import {
	type DateRange,
} from '@/components/home/date-range-picker'
import { type GuestCounts } from '@/components/home/guest-picker'
import { DatesField } from '@/components/stays/dates-field'
import { StayListingCard } from '@/components/stays/stay-listing-card'
import { FilterField } from '@/components/stays/filter-field'
import { GuestsField } from '@/components/stays/guests-field'
import { STAYS, type Stay, type StayFilter } from '@/data/stays'

interface StayFilters {
	destination: string[]
	bedrooms: string[]
	propertyType: string[]
	guests: GuestCounts
	dates: DateRange
}

export interface StaysCatalogInitialFilters {
	destination?: string[]
	guests?: GuestCounts
	from?: string | null
	to?: string | null
}

interface StaysCatalogProps {
	initialFilters?: StaysCatalogInitialFilters
}

const EMPTY_GUESTS: GuestCounts = {
	adults: 0,
	children: 0,
	infants: 0,
}

const EMPTY_DATES: DateRange = {
	from: null,
	to: null,
}

const DEFAULT_FILTERS: StayFilters = {
	destination: [],
	bedrooms: [],
	propertyType: [],
	guests: EMPTY_GUESTS,
	dates: EMPTY_DATES,
}

function filterStays (stays: Stay[], filters: StayFilters) {
	return stays.filter((stay) => {
		if (filters.destination.length > 0) {
			const matchesDestination = filters.destination.some((item) =>
				stay.filters.includes(item as StayFilter),
			)

			if (!matchesDestination) {
				return false
			}
		}

		if (filters.propertyType.length > 0) {
			const matchesType = filters.propertyType.some((item) =>
				stay.filters.includes(item as StayFilter),
			)

			if (!matchesType) {
				return false
			}
		}

		if (filters.bedrooms.length > 0) {
			const matchesBeds = filters.bedrooms.some(
				(item) => stay.beds === Number(item),
			)

			if (!matchesBeds) {
				return false
			}
		}

		const guestTotal = filters.guests.adults + filters.guests.children

		if (guestTotal > 0) {
			if (!stay.guests || stay.guests < guestTotal) {
				return false
			}
		}

		return true
	})
}

function parseDateValue (value?: string | null) {
	if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
		return null
	}

	const date = new Date(`${value}T00:00:00`)
	return Number.isNaN(date.getTime()) ? null : date
}

function buildInitialFilters (
	initialFilters?: StaysCatalogInitialFilters,
): StayFilters {
	return {
		...DEFAULT_FILTERS,
		destination: initialFilters?.destination ?? [],
		guests: initialFilters?.guests ?? EMPTY_GUESTS,
		dates: {
			from: parseDateValue(initialFilters?.from),
			to: parseDateValue(initialFilters?.to),
		},
	}
}

export function StaysCatalog ({ initialFilters }: StaysCatalogProps) {
	const router = useRouter()
	const startingFilters = buildInitialFilters(initialFilters)
	const [draft, setDraft] = useState<StayFilters>(startingFilters)
	const [applied, setApplied] = useState<StayFilters>(startingFilters)

	const visibleStays = filterStays(STAYS, applied)
	const hasActiveFilters =
		draft.destination.length > 0 ||
		draft.bedrooms.length > 0 ||
		draft.propertyType.length > 0 ||
		draft.guests.adults > 0 ||
		draft.guests.children > 0 ||
		draft.guests.infants > 0 ||
		Boolean(draft.dates.from) ||
		Boolean(draft.dates.to) ||
		applied.destination.length > 0 ||
		applied.bedrooms.length > 0 ||
		applied.propertyType.length > 0 ||
		applied.guests.adults > 0 ||
		applied.guests.children > 0 ||
		applied.guests.infants > 0 ||
		Boolean(applied.dates.from) ||
		Boolean(applied.dates.to)

	function handleSubmit (event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		setApplied(draft)
	}

	function handleClear () {
		const cleared: StayFilters = {
			destination: [],
			bedrooms: [],
			propertyType: [],
			guests: { ...EMPTY_GUESTS },
			dates: { ...EMPTY_DATES },
		}
		setDraft(cleared)
		setApplied(cleared)
		router.replace('/stays')
	}

	return (
		<div>
			<form
				onSubmit={handleSubmit}
				className="grid grid-cols-2 gap-x-4 gap-y-5 lg:grid-cols-[1fr_1fr_1fr_1fr_1fr_auto] lg:items-end"
			>
				<FilterField
					id="destination"
					label="Destination"
					name="destination"
					value={draft.destination}
					placeholder="Select destinations"
					onChange={(value) => {
						setDraft((current) => ({
							...current,
							destination: value,
						}))
					}}
					options={[
						{ value: 'nairobi', label: 'Nairobi' },
						{ value: 'mombasa', label: 'Mombasa' },
					]}
				/>
				<DatesField
					id="dates"
					label="When"
					value={draft.dates}
					onChange={(value) => {
						setDraft((current) => ({
							...current,
							dates: value,
						}))
					}}
				/>
				<FilterField
					id="bedrooms"
					label="Bedrooms"
					name="bedrooms"
					value={draft.bedrooms}
					placeholder="Select bedrooms"
					onChange={(value) => {
						setDraft((current) => ({
							...current,
							bedrooms: value,
						}))
					}}
					options={[
						{ value: '1', label: '1' },
						{ value: '2', label: '2' },
					]}
				/>
				<FilterField
					id="property-type"
					label="Property Type"
					name="propertyType"
					value={draft.propertyType}
					placeholder="Select types"
					onChange={(value) => {
						setDraft((current) => ({
							...current,
							propertyType: value,
						}))
					}}
					options={[
						{ value: 'apartments', label: 'Apartments' },
						{ value: 'villas', label: 'Villas' },
					]}
				/>
				<GuestsField
					id="guests"
					label="Guests"
					name="guests"
					value={draft.guests}
					onChange={(value) => {
						setDraft((current) => ({
							...current,
							guests: value,
						}))
					}}
				/>
				<div className="col-span-2 mt-1 flex items-center gap-3 lg:col-span-1 lg:mt-0">
					<button
						type="submit"
						className="inline-flex h-14 flex-1 items-center justify-center gap-2 rounded-full bg-forest px-8 text-[0.95rem] font-medium text-gold-soft lg:min-w-[9.5rem] lg:flex-none"
					>
						<Search className="size-4" strokeWidth={2.2} />
						Search
					</button>
					{hasActiveFilters ? (
						<button
							type="button"
							onClick={handleClear}
							className="inline-flex h-14 items-center justify-center rounded-full px-4 text-[0.95rem] font-medium text-muted-foreground transition-colors hover:text-ink"
						>
							Clear
						</button>
					) : null}
				</div>
			</form>
			<div className="mt-10 border-t border-[#e6e3db] pt-10 lg:mt-14 lg:pt-14">
				{visibleStays.length > 0 ? (
					<div className="flex flex-wrap justify-center gap-x-5 gap-y-10 lg:justify-start lg:gap-x-6 lg:gap-y-12">
						{visibleStays.map((stay) => (
							<StayListingCard key={stay.id} stay={stay} />
						))}
					</div>
				) : (
					<p className="py-16 text-sm text-muted-foreground">
						No stays match these filters yet.
					</p>
				)}
			</div>
		</div>
	)
}
