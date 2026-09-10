'use client'

import { FormEvent, useState } from 'react'
import { Search } from 'lucide-react'

import { StayListingCard } from '@/components/stays/stay-listing-card'
import { FilterField } from '@/components/stays/filter-field'
import { GuestsField } from '@/components/stays/guests-field'
import { STAYS, type Stay, type StayFilter } from '@/data/stays'

interface StayFilters {
	destination: string[]
	bedrooms: string[]
	propertyType: string[]
	guests: string
}

const DEFAULT_FILTERS: StayFilters = {
	destination: [],
	bedrooms: [],
	propertyType: [],
	guests: '',
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

		if (filters.guests !== '') {
			const guests = Number(filters.guests)

			if (!stay.guests || stay.guests < guests) {
				return false
			}
		}

		return true
	})
}

export function StaysCatalog () {
	const [draft, setDraft] = useState<StayFilters>(DEFAULT_FILTERS)
	const [applied, setApplied] = useState<StayFilters>(DEFAULT_FILTERS)

	const visibleStays = filterStays(STAYS, applied)

	function handleSubmit (event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		setApplied(draft)
	}

	return (
		<div>
			<form
				onSubmit={handleSubmit}
				className="grid grid-cols-2 gap-x-4 gap-y-5 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] lg:items-end"
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
				<button
					type="submit"
					className="col-span-2 mt-1 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-forest px-8 text-[0.95rem] font-medium text-gold-soft lg:col-span-1 lg:mt-0 lg:w-auto lg:min-w-[9.5rem]"
				>
					<Search className="size-4" strokeWidth={2.2} />
					Search
				</button>
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
