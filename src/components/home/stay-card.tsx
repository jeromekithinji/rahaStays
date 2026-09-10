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

	return (
		<article id={stay.id} className="min-w-0">
			<StayMedia
				stay={stay}
				sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
			/>
			<h3 className="mt-4 text-[1.05rem] font-semibold text-ink">
				{stay.title}
			</h3>
			<p className="mt-1 text-sm text-muted-foreground">
				{stay.location}
			</p>
			{specs ? (
				<p className="mt-1 text-sm text-muted-foreground">
					{specs}
				</p>
			) : null}
			{stay.summary ? (
				<p className="mt-2 text-sm">
					<Link
						href={`#${stay.id}`}
						className="font-medium text-ink"
					>
						View property
					</Link>
					<span className="text-muted-foreground">
						{' '}
						· {stay.summary}
					</span>
				</p>
			) : null}
		</article>
	)
}
