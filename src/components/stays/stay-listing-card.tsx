import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Bath, BedDouble, MapPin, Users } from 'lucide-react'

import type { Stay } from '@/data/stays'

interface StayListingCardProps {
	stay: Stay
}

/** Figma: tile 389×376, image 389×259 */
export function StayListingCard ({ stay }: StayListingCardProps) {
	const hasSpecs = Boolean(stay.beds && stay.baths && stay.guests)

	return (
		<article
			id={stay.id}
			className="flex w-full max-w-[389px] flex-col"
		>
			{stay.isComingSoon || !stay.image ? (
				<div className="flex aspect-[389/259] w-full items-center justify-center rounded-2xl bg-[#efece4]">
					<div className="text-center">
						<MapPin
							className="mx-auto mb-2 size-7 text-forest"
							strokeWidth={1.75}
						/>
						<p className="text-[1.05rem] font-semibold text-[#6b6b66]">
							{stay.title}
						</p>
						<p className="mt-1 text-sm text-[#9a9a94]">
							Coming Soon
						</p>
					</div>
				</div>
			) : (
				<Link
					href={`/stays/${stay.id}`}
					className="relative aspect-[389/259] w-full overflow-hidden rounded-2xl"
				>
					<Image
						src={stay.image}
						alt={stay.title}
						fill
						className="object-cover"
						sizes="(min-width: 1024px) 389px, 100vw"
					/>
				</Link>
			)}
			<div className="flex min-h-[117px] flex-1 flex-col pt-3">
				<h2 className="font-sans text-[1.05rem] leading-snug font-semibold text-ink">
					{stay.isComingSoon ? (
						stay.title
					) : (
						<Link
							href={`/stays/${stay.id}`}
							className="hover:text-forest"
						>
							{stay.title}
						</Link>
					)}
				</h2>
				<p className="mt-1.5 flex items-center gap-1.5 text-sm leading-none text-forest/60">
					<MapPin className="size-3.5 shrink-0" strokeWidth={1.75} />
					{stay.location}
				</p>
				{hasSpecs ? (
					<ul className="mt-0.5 flex items-center gap-5 text-sm leading-none text-forest/60">
						<li className="flex items-center gap-1.5">
							<BedDouble className="size-4" strokeWidth={1.6} />
							{stay.beds}
						</li>
						<li className="flex items-center gap-1.5">
							<Bath className="size-4" strokeWidth={1.6} />
							{stay.baths}
						</li>
						<li className="flex items-center gap-1.5">
							<Users className="size-4" strokeWidth={1.6} />
							{stay.guests}
						</li>
					</ul>
				) : null}
				{stay.isComingSoon ? null : (
					<Link
						href={`/stays/${stay.id}`}
						className="mt-2.5 inline-flex items-center gap-1.5 text-[0.95rem] font-medium text-forest"
					>
						View Stay
						<ArrowRight className="size-4" strokeWidth={1.75} />
					</Link>
				)}
			</div>
		</article>
	)
}
