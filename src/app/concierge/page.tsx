import type { Metadata } from 'next'
import { MessageCircle } from 'lucide-react'

import { ConciergeServices } from '@/components/concierge/concierge-services'
import { CONCIERGE_STEPS } from '@/data/concierge'

export const metadata: Metadata = {
	title: 'Concierge | Raha Stays',
	description:
		'Your stay can extend far beyond your apartment. Raha Concierge arranges services and experiences designed around you.',
}

export default function ConciergePage () {
	return (
		<main className="flex-1 bg-cream">
			<section className="bg-forest px-5 py-16 lg:px-8 lg:py-24">
				<div className="mx-auto max-w-3xl text-center">
					<h1 className="font-heading text-[1.85rem] leading-tight font-medium tracking-[-0.02em] text-gold lg:text-[3.15rem]">
						Experience More With Raha Concierge
					</h1>
					<p className="mt-5 text-[1.05rem] leading-relaxed text-white/85 lg:mt-6 lg:text-[1.2rem]">
						Your stay can extend far beyond your apartment.
						Raha Concierge
						<br />
						arranges services and experiences designed around
						you.
					</p>
				</div>
			</section>
			<section className="px-5 py-12 lg:px-8 lg:py-16">
				<div className="mx-auto max-w-[1280px]">
					<ConciergeServices />
					<div className="mt-12 text-center lg:mt-16">
						<a
							href="https://wa.me/254725749544"
							className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-forest px-7 text-[0.95rem] font-medium text-gold-soft"
						>
							<MessageCircle
								className="size-4"
								strokeWidth={1.7}
							/>
							Request Concierge Service
						</a>
						<p className="mt-4 text-sm text-muted-foreground">
							Or email{' '}
							<a
								href="mailto:bookings@rahalink.com"
								className="font-medium text-ink"
							>
								bookings@rahalink.com
							</a>
						</p>
					</div>
				</div>
			</section>
			<section className="px-5 pb-16 pt-6 lg:px-8 lg:pb-24 lg:pt-8">
				<div className="mx-auto max-w-[1280px]">
					<h2 className="font-heading text-center text-[1.85rem] font-medium tracking-[-0.02em] text-ink lg:text-[2.75rem]">
						How It Works
					</h2>
					<ol className="mx-auto mt-8 grid max-w-3xl gap-8 lg:mt-10 lg:grid-cols-3 lg:gap-4">
						{CONCIERGE_STEPS.map((step) => (
							<li
								key={step.number}
								className="text-center"
							>
								<p className="font-heading text-[2rem] text-gold lg:text-[2.35rem]">
									{step.number}
								</p>
								<h3 className="mt-3 text-[1.05rem] font-semibold text-ink">
									{step.title}
								</h3>
								<p className="mx-auto mt-2 max-w-[14rem] text-sm leading-relaxed text-muted-foreground">
									{step.description}
								</p>
							</li>
						))}
					</ol>
				</div>
			</section>
		</main>
	)
}
