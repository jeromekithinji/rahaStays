import Link from 'next/link'

import { StayMedia } from '@/components/stays/stay-media'
import type { Stay } from '@/data/stays'

interface StayCardProps {
	stay: Stay
}

export function StayCard ({ stay }: StayCardProps) {
	const specs = stay.beds && stay.baths && stay.guests
		? `${stay.beds} bed${stay.beds === 1 ? '' : 's'} · ${stay.baths} bath${stay.baths === 1 ? '' : 's'} · Up to ${stay.guests} guests`
		: null
	const href = stay.isComingSoon ? undefined : `/stays/${stay.id}`

	return (
		<article id={stay.id} className="min-w-0">
			{href ? (
				<Link href={href} className="block">
					<StayMedia
						stay={stay}
						sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
					/>
				</Link>
			) : (
				<StayMedia
					stay={stay}
					sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
				/>
			)}
			<h3 className="mt-3 text-[1.05rem] leading-snug font-semibold text-ink">
				{href ? (
					<Link href={href} className="hover:text-forest">
						{stay.title}
					</Link>
				) : (
					stay.title
				)}
			</h3>
			<p className="mt-0.5 text-sm leading-snug text-muted-foreground">
				{stay.location}
			</p>
			{specs ? (
				<p className="mt-0.5 text-sm leading-snug text-muted-foreground">
					{specs}
				</p>
			) : null}
			{href ? (
				<p className="mt-1 text-sm leading-snug">
					<Link
						href={href}
						className="font-medium text-ink hover:text-forest"
					>
						View property
					</Link>
				</p>
			) : (
				<p className="mt-1 text-sm leading-snug font-medium text-ink">
					Coming soon
				</p>
			)}
		</article>
	)
}
