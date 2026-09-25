import type { Metadata } from 'next'

import {
	StaysCatalog,
	type StaysCatalogInitialFilters,
} from '@/components/stays/stays-catalog'
import type { GuestCounts } from '@/components/home/guest-picker'

export const metadata: Metadata = {
	title: 'Our Stays | Raha Stays',
	description:
		'Discover beautifully furnished serviced residences across prime locations.',
}

interface StaysPageProps {
	searchParams: Promise<Record<string, string | string[] | undefined>>
}

function getParam (
	params: Record<string, string | string[] | undefined>,
	key: string,
) {
	const value = params[key]
	return typeof value === 'string' ? value : undefined
}

function parseGuests (
	params: Record<string, string | string[] | undefined>,
): GuestCounts {
	const adults = Number(getParam(params, 'adults') ?? 0)
	const children = Number(getParam(params, 'children') ?? 0)
	const infants = Number(getParam(params, 'infants') ?? 0)
	const guestsTotal = Number(getParam(params, 'guests') ?? 0)

	if (adults > 0 || children > 0 || infants > 0) {
		return {
			adults: Number.isFinite(adults) ? Math.max(0, adults) : 0,
			children: Number.isFinite(children) ? Math.max(0, children) : 0,
			infants: Number.isFinite(infants) ? Math.max(0, infants) : 0,
		}
	}

	if (Number.isFinite(guestsTotal) && guestsTotal > 0) {
		return {
			adults: guestsTotal,
			children: 0,
			infants: 0,
		}
	}

	return {
		adults: 0,
		children: 0,
		infants: 0,
	}
}

export default async function StaysPage ({ searchParams }: StaysPageProps) {
	const params = await searchParams
	const destination = getParam(params, 'destination')
	const guests = parseGuests(params)

	const initialFilters: StaysCatalogInitialFilters = {
		destination:
			destination === 'nairobi' || destination === 'mombasa'
				? [destination]
				: [],
		guests,
		from: getParam(params, 'from') ?? null,
		to: getParam(params, 'to') ?? null,
	}

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
						<StaysCatalog initialFilters={initialFilters} />
					</div>
				</div>
			</section>
		</main>
	)
}
