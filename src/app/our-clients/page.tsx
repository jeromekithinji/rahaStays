import type { Metadata } from 'next'
import Link from 'next/link'

import { ClientPersonaSection } from '@/components/clients/client-persona-section'
import { CLIENT_PERSONAS } from '@/data/clients'

export const metadata: Metadata = {
	title: 'Our Clients | Raha Stays',
	description:
		'A stay designed around you. Discover how Raha Stays supports business travellers, families, diaspora visitors, expats, corporate teams and extended stays.',
}

export default function OurClientsPage () {
	return (
		<main className="flex-1">
			<section className="bg-[#1C3022] px-5 pt-10 pb-10 lg:px-8 lg:pt-16 lg:pb-14">
				<div className="mx-auto max-w-[1280px]">
					<h1 className="font-heading text-[2.15rem] leading-tight font-medium tracking-[-0.02em] text-gold lg:text-[3rem]">
						Our Clients
					</h1>
					<p className="mt-3 max-w-2xl text-[1.05rem] leading-relaxed text-white/85 lg:mt-4 lg:text-[1.15rem]">
						A stay designed around you. Every guest is
						different, so every stay is tailored.
					</p>
				</div>
			</section>

			{CLIENT_PERSONAS.map((persona, index) => (
				<ClientPersonaSection
					key={persona.id}
					persona={persona}
					imageOnLeft={index % 2 === 0}
					background={index % 2 === 0 ? 'white' : 'warm'}
				/>
			))}

			<section className="bg-forest px-5 py-7 lg:px-8 lg:py-8">
				<div className="mx-auto flex max-w-[1280px] flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
					<p className="font-heading max-w-xl text-[1.25rem] leading-snug font-medium tracking-[-0.02em] text-gold lg:text-[1.5rem]">
						Not sure which stay fits you? Talk to our team.
					</p>
					<Link
						href="/contact"
						className="inline-flex h-12 w-fit shrink-0 cursor-pointer items-center justify-center rounded-full bg-gold px-7 text-[0.95rem] font-medium text-forest transition-colors hover:bg-gold-soft"
					>
						Contact Us
					</Link>
				</div>
			</section>
		</main>
	)
}
