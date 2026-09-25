import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'

import { StayAmenities } from '@/components/stays/stay-amenities'
import { StayBookingCard } from '@/components/stays/stay-booking-card'
import { StayDetailActions } from '@/components/stays/stay-detail-actions'
import { StayGallery } from '@/components/stays/stay-gallery'
import type { Stay } from '@/data/stays'

interface StayDetailProps {
	stay: Stay
}

export function StayDetail ({ stay }: StayDetailProps) {
	const images = stay.images?.length
		? stay.images
		: stay.image
			? [stay.image]
			: []

	const specs = [
		stay.guests
			? `${stay.guests} guest${stay.guests === 1 ? '' : 's'}`
			: null,
		stay.beds
			? `${stay.beds} bedroom${stay.beds === 1 ? '' : 's'}`
			: null,
		stay.baths
			? `${stay.baths} bath${stay.baths === 1 ? '' : 's'}`
			: null,
	].filter(Boolean)

	if (stay.isComingSoon) {
		return (
			<div className="mx-auto max-w-[1280px] px-5 py-16 text-center lg:px-8">
				<MapPin className="mx-auto size-8 text-forest" strokeWidth={1.6} />
				<h1 className="font-heading mt-4 text-[2rem] text-ink">
					{stay.title}
				</h1>
				<p className="mt-3 text-muted-foreground">
					Coming soon to Raha Stays.
				</p>
				<Link
					href="/stays"
					className="mt-8 inline-flex items-center gap-2 font-medium text-forest"
				>
					Browse available stays
					<ArrowRight className="size-4" />
				</Link>
			</div>
		)
	}

	return (
		<div className="mx-auto max-w-[1280px] px-5 pt-8 pb-16 lg:px-8 lg:pt-10 lg:pb-24">
			<div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
				<div>
					<h1 className="font-heading text-[1.75rem] leading-tight font-medium tracking-[-0.02em] text-ink lg:text-[2.25rem]">
						{stay.title}
					</h1>
					<p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
						<MapPin className="size-3.5 shrink-0" strokeWidth={1.75} />
						{stay.location}
					</p>
				</div>
				<StayDetailActions title={stay.title} />
			</div>

			{images.length > 0 ? (
				<div className="mt-6">
					<StayGallery title={stay.title} images={images} />
				</div>
			) : null}

			<div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-14 xl:grid-cols-[minmax(0,1fr)_380px]">
				<div className="min-w-0">
					<div className="border-b border-[#e6e3db] pb-8">
						<h2 className="text-[1.2rem] font-semibold text-ink">
							{stay.propertyLabel ?? 'Entire stay'} hosted by
							Raha Stays
						</h2>
						{specs.length > 0 ? (
							<p className="mt-2 text-[0.95rem] text-muted-foreground">
								{specs.join(' · ')}
							</p>
						) : null}
						{stay.description && stay.description.length > 0 ? (
							<div className="mt-5 max-w-2xl space-y-4 text-[1.05rem] leading-relaxed text-ink/85">
								{stay.description.map((paragraph) => (
									<p key={paragraph.slice(0, 48)}>
										{paragraph}
									</p>
								))}
							</div>
						) : stay.summary ? (
							<p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-ink/85">
								{stay.summary}
							</p>
						) : null}
					</div>

					{stay.sleepSpaces && stay.sleepSpaces.length > 0 ? (
						<section className="border-b border-[#e6e3db] py-8">
							<h2 className="text-[1.2rem] font-semibold text-ink">
								Where you&apos;ll sleep
							</h2>
							<ul className="mt-5 grid gap-4 sm:grid-cols-2">
								{stay.sleepSpaces.map((space) => (
									<li
										key={space.title}
										className="overflow-hidden rounded-2xl border border-[#e6e3db]"
									>
										<div className="relative aspect-[4/3]">
											<Image
												src={space.image}
												alt={space.title}
												fill
												className="object-cover"
												sizes="(min-width: 640px) 280px, 100vw"
											/>
										</div>
										<div className="p-4">
											<p className="font-semibold text-ink">
												{space.title}
											</p>
											<p className="mt-1 text-sm text-muted-foreground">
												{space.detail}
											</p>
										</div>
									</li>
								))}
							</ul>
						</section>
					) : null}

					{stay.amenities && stay.amenities.length > 0 ? (
						<StayAmenities amenities={stay.amenities} />
					) : null}
				</div>

				<div className="lg:pt-1">
					<StayBookingCard
						title={stay.title}
						guests={stay.guests}
						pricePerNight={stay.pricePerNight}
						currency={stay.currency}
					/>
				</div>
			</div>

			{(stay.neighborhood || stay.mapEmbedUrl) ? (
				<section className="mt-4 pt-4 lg:mt-5 lg:pt-5">
					<h2 className="text-[1.35rem] font-semibold text-ink lg:text-[1.5rem]">
						Where you&apos;ll be
					</h2>
					{stay.neighborhood ? (
						<p className="mt-2 text-[0.95rem] text-muted-foreground">
							{stay.neighborhood}
						</p>
					) : null}
					{stay.mapEmbedUrl ? (
						<div className="mt-5 overflow-hidden rounded-2xl border border-[#e6e3db] bg-[#efece4]">
							<iframe
								title={`Map of ${stay.neighborhood ?? stay.title}`}
								src={stay.mapEmbedUrl}
								className="h-[280px] w-full border-0 lg:h-[360px]"
								loading="lazy"
							/>
						</div>
					) : (
						<div className="mt-5 flex h-[240px] items-center justify-center rounded-2xl bg-[#efece4] text-sm text-muted-foreground lg:h-[320px]">
							Map coming soon
						</div>
					)}
					{stay.mapLink ? (
						<a
							href={stay.mapLink}
							target="_blank"
							rel="noreferrer"
							className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink underline-offset-2 hover:underline"
						>
							Show more
							<ArrowRight className="size-3.5" strokeWidth={1.75} />
						</a>
					) : null}

					{stay.neighborhoodHighlights &&
					stay.neighborhoodHighlights.length > 0 ? (
						<div className="mt-10">
							<h3 className="text-[1.15rem] font-semibold text-ink">
								Neighborhood highlights
							</h3>
							<div className="mt-3 max-w-3xl space-y-4 text-[1.05rem] leading-relaxed text-ink/85">
								{stay.neighborhoodHighlights.map((paragraph) => (
									<p key={paragraph.slice(0, 48)}>
										{paragraph}
									</p>
								))}
							</div>
						</div>
					) : null}
				</section>
			) : null}
		</div>
	)
}
