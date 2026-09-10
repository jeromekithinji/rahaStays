import type { Metadata } from 'next'

import { StaysCatalog } from '@/components/stays/stays-catalog'

export const metadata: Metadata = {
	title: 'Our Stays | Raha Stays',
	description:
		'Discover beautifully furnished serviced residences across prime locations.',
}

export default function StaysPage () {
	return (
		<main className="flex-1 bg-cream">
			<section className="px-5 pt-10 pb-16 lg:px-8 lg:pt-16 lg:pb-24">
				<div className="mx-auto max-w-[1280px]">
					<h1 className="font-heading text-[2.15rem] leading-tight font-medium tracking-[-0.02em] text-ink lg:text-[3rem]">
						Our Stays
					</h1>
					<p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground lg:mt-4 lg:text-base">
						Discover beautifully furnished serviced
						residences across prime locations.
					</p>
					<div className="mt-10 lg:mt-12">
						<StaysCatalog />
					</div>
				</div>
			</section>
		</main>
	)
}
