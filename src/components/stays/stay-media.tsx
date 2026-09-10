import Image from 'next/image'
import { MapPin } from 'lucide-react'

import type { Stay } from '@/data/stays'

interface StayMediaProps {
	stay: Stay
	sizes: string
}

/**
 * Tile media locked to Figma Zenith Gardens (405×268).
 * Width is fluid; height always follows that ratio on every breakpoint.
 */
export function StayMedia ({ stay, sizes }: StayMediaProps) {
	const frameClassName =
		'relative w-full min-w-0 overflow-hidden rounded-2xl ' +
		'aspect-[405/268]'

	if (stay.isComingSoon || !stay.image) {
		return (
			<div
				className={`flex items-center justify-center bg-[#efece4] ${frameClassName}`}
				style={{ aspectRatio: '405 / 268' }}
			>
				<div className="px-4 text-center">
					<MapPin
						className="mx-auto mb-2 size-7 text-forest"
						strokeWidth={1.75}
					/>
					<p className="text-[1.05rem] font-semibold text-[#6b6b66]">
						{stay.title.replace(' by Raha Stays', '')}
					</p>
					<p className="mt-1 text-sm text-[#9a9a94]">
						Coming Soon
					</p>
				</div>
			</div>
		)
	}

	return (
		<div
			className={frameClassName}
			style={{ aspectRatio: '405 / 268' }}
		>
			<Image
				src={stay.image}
				alt={stay.title}
				fill
				className="object-cover object-center"
				sizes={sizes}
			/>
		</div>
	)
}
