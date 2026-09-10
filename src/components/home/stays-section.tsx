'use client'

import { useState } from 'react'

import { StayCard } from '@/components/home/stay-card'
import {
	STAY_FILTERS,
	STAYS,
	type StayFilter,
} from '@/data/stays'

export function StaysSection () {
	const [activeFilter, setActiveFilter] = useState<StayFilter>('all')

	const visibleStays = activeFilter === 'all'
		? STAYS
		: STAYS.filter((stay) => stay.filters.includes(activeFilter))

	function handleFilterClick (filter: StayFilter) {
		setActiveFilter(filter)
	}

	return (
		<>
			<nav
				aria-label="Stay filters"
				className="sticky top-[3.75rem] z-30 border-b border-[#e6e3db] bg-cream px-5 lg:top-20 lg:px-8"
			>
				<ul className="mx-auto flex max-w-[1280px] gap-6 overflow-x-auto pb-px lg:gap-10">
					{STAY_FILTERS.map((filter) => {
						const isActive = filter.id === activeFilter

						return (
							<li key={filter.id} className="shrink-0">
								<button
									type="button"
									onClick={() => handleFilterClick(filter.id)}
									className={
										isActive
											? 'border-b-2 border-ink py-3 text-[0.95rem] font-medium text-ink'
											: 'border-b-2 border-transparent py-3 text-[0.95rem] font-medium text-muted-foreground'
									}
								>
									{filter.label}
								</button>
							</li>
						)
					})}
				</ul>
			</nav>
			<div className="px-5 py-8 lg:px-8 lg:py-12">
				<div className="mx-auto max-w-[1280px]">
					{visibleStays.length > 0 ? (
						<div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
							{visibleStays.map((stay) => (
								<StayCard key={stay.id} stay={stay} />
							))}
						</div>
					) : (
						<p className="py-12 text-sm text-muted-foreground">
							No stays match this filter yet.
						</p>
					)}
				</div>
			</div>
		</>
	)
}
