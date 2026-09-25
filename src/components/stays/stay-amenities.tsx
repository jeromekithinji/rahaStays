'use client'

import { useEffect, useId, useMemo, useState } from 'react'
import {
	Armchair,
	Bath,
	BedDouble,
	Building2,
	Car,
	Coffee,
	Droplets,
	Dumbbell,
	Flame,
	Mountain,
	ShieldCheck,
	Shirt,
	Sparkles,
	SprayCan,
	Tv,
	UtensilsCrossed,
	Waves,
	Wifi,
	Wind,
	X,
	type LucideIcon,
} from 'lucide-react'

import type { AmenityIconId, StayAmenity } from '@/data/stays'

const PREVIEW_COUNT = 6

const AMENITY_ICONS: Record<AmenityIconId, LucideIcon> = {
	bathtub: Bath,
	car: Car,
	coffee: Coffee,
	droplets: Droplets,
	dumbbell: Dumbbell,
	flame: Flame,
	hairDryer: Wind,
	hanger: Shirt,
	mountain: Mountain,
	shield: ShieldCheck,
	shirt: Shirt,
	sparkles: Sparkles,
	spray: SprayCan,
	tv: Tv,
	utensils: UtensilsCrossed,
	waves: Waves,
	wifi: Wifi,
	wind: Wind,
	elevator: Building2,
	balcony: Armchair,
	bed: BedDouble,
}

interface StayAmenitiesProps {
	amenities: StayAmenity[]
}

export function StayAmenities ({ amenities }: StayAmenitiesProps) {
	const titleId = useId()
	const [isOpen, setIsOpen] = useState(false)
	const preview = amenities.slice(0, PREVIEW_COUNT)
	const hasMore = amenities.length > PREVIEW_COUNT

	const groupedAmenities = useMemo(() => {
		const groups = new Map<string, StayAmenity[]>()

		for (const amenity of amenities) {
			const current = groups.get(amenity.category) ?? []
			current.push(amenity)
			groups.set(amenity.category, current)
		}

		return Array.from(groups.entries())
	}, [amenities])

	useEffect(() => {
		if (!isOpen) return

		function handleKeyDown (event: KeyboardEvent) {
			if (event.key === 'Escape') {
				setIsOpen(false)
			}
		}

		document.body.style.overflow = 'hidden'
		window.addEventListener('keydown', handleKeyDown)

		return () => {
			document.body.style.overflow = ''
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [isOpen])

	if (amenities.length === 0) return null

	return (
		<section className="border-b border-[#e6e3db] py-8">
			<h2 className="text-[1.2rem] font-semibold text-ink">
				What this place offers
			</h2>
			<ul className="mt-5 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
				{preview.map((amenity) => {
					const Icon = AMENITY_ICONS[amenity.icon]

					return (
						<li
							key={`${amenity.category}-${amenity.label}`}
							className="flex items-center gap-3 text-[0.95rem] text-ink"
						>
							<Icon
								className="size-5 shrink-0 text-forest"
								strokeWidth={1.6}
							/>
							<span>{amenity.label}</span>
						</li>
					)
				})}
			</ul>
			{hasMore ? (
				<button
					type="button"
					onClick={() => setIsOpen(true)}
					className="mt-6 inline-flex rounded-xl border border-ink/25 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-[#efece4]"
				>
					Show all {amenities.length} amenities
				</button>
			) : null}

			{isOpen ? (
				<div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6">
					<button
						type="button"
						aria-label="Close amenities"
						className="absolute inset-0 bg-forest/45 backdrop-blur-[2px]"
						onClick={() => setIsOpen(false)}
					/>
					<div
						role="dialog"
						aria-modal="true"
						aria-labelledby={titleId}
						className="relative z-10 flex max-h-[88vh] w-full max-w-xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
					>
						<div className="flex items-center gap-3 border-b border-[#e6e3db] px-5 py-4">
							<button
								type="button"
								onClick={() => setIsOpen(false)}
								className="flex size-9 items-center justify-center rounded-full hover:bg-[#f3f1ea]"
								aria-label="Close"
							>
								<X className="size-5" strokeWidth={1.75} />
							</button>
							<h2
								id={titleId}
								className="text-[1.15rem] font-semibold text-ink"
							>
								What this place offers
							</h2>
						</div>
						<div className="overflow-y-auto px-5 py-5 sm:px-6">
							{groupedAmenities.map(([category, items]) => (
								<section
									key={category}
									className="mb-8 last:mb-2"
								>
									<h3 className="text-[1.05rem] font-semibold text-ink">
										{category}
									</h3>
									<ul className="mt-3">
										{items.map((amenity) => {
											const Icon = AMENITY_ICONS[amenity.icon]

											return (
												<li
													key={`${category}-${amenity.label}`}
													className="flex items-center gap-4 border-b border-[#ebebeb] py-4 last:border-b-0"
												>
													<Icon
														className="size-5 shrink-0 text-ink"
														strokeWidth={1.6}
													/>
													<span className="text-[0.95rem] text-ink">
														{amenity.label}
													</span>
												</li>
											)
										})}
									</ul>
								</section>
							))}
						</div>
					</div>
				</div>
			) : null}
		</section>
	)
}
