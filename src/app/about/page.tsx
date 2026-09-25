import type { Metadata } from 'next'

import {
	ABOUT_MANAGEMENT_SERVICES,
	ABOUT_PILLARS,
	ABOUT_VALUES,
} from '@/data/about'

export const metadata: Metadata = {
	title: 'About | Raha Stays',
	description:
		'Raha Stays is a premium serviced accommodation brand offering beautifully furnished residences across Kenya.',
}

export default function AboutPage () {
	return (
		<main className="flex-1 bg-cream">
			<section className="px-5 pt-10 pb-10 lg:px-8 lg:pt-16 lg:pb-12">
				<div className="mx-auto max-w-[1280px]">
					<h1 className="font-heading text-[2.15rem] leading-tight font-medium tracking-[-0.02em] text-ink lg:text-[3rem]">
						About Raha Stays
					</h1>
					<p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-muted-foreground lg:mt-5 lg:text-[1.15rem]">
						Raha Stays is a premium serviced accommodation brand
						offering beautifully furnished residences across
						Kenya. We create spaces where guests feel at home
						while experiencing more.
					</p>
				</div>
			</section>
			<section className="px-5 pb-16 lg:px-8 lg:pb-24">
				<div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
					<div>
						<h2 className="font-heading text-[1.85rem] leading-tight font-medium tracking-[-0.02em] text-ink lg:text-[2.35rem]">
							Our Story
						</h2>
						<div className="mt-5 space-y-5 text-[1.05rem] leading-relaxed text-muted-foreground lg:text-[1.15rem]">
							<p>
								Raha is a Swahili word for comfort, joy
								and pleasure. It captures the feeling we
								want every guest to take away from a stay
								with us.
							</p>
							<p>
								Raha Stays began with a simple belief:
								where you stay should feel like part of
								the experience, not just a place to sleep.
								We created welcoming homes for travellers
								who want the comfort of settling in and
								the freedom to explore.
							</p>
							<p>
								Whether you are visiting for work,
								reconnecting with family, or discovering
								somewhere new, we want you to feel at ease
								from the moment you arrive. Our thoughtfully
								furnished homes give you space to make each
								stay your own. Through Raha Concierge, we
								can help with the details that make a trip
								easier and more memorable, from airport
								transfers and grocery shopping to a private
								cook and local experiences.
							</p>
							<p>
								That is what Raha means to us: feeling at
								home, enjoying the moment, and making room
								to experience more.
							</p>
							<p className="font-medium text-ink">
								Raha Stays. Experience More.
							</p>
						</div>
					</div>
					<ul className="grid grid-cols-2 gap-3 lg:gap-4">
						{ABOUT_VALUES.map((value) => {
							const Icon = value.icon

							return (
								<li key={value.title}>
									<div className="h-full rounded-2xl border border-[#c5d9cb] bg-[#f1f5f2] p-5 lg:p-6">
										<Icon
											className="size-7 text-forest lg:size-8"
											strokeWidth={1.5}
										/>
										<h3 className="mt-4 text-[0.95rem] font-semibold text-ink lg:text-base">
											{value.title}
										</h3>
										<p className="mt-1.5 text-sm leading-snug text-muted-foreground">
											{value.description}
										</p>
									</div>
								</li>
							)
						})}
					</ul>
				</div>
			</section>
			<section className="bg-forest px-5 py-16 lg:px-8 lg:py-24">
				<div className="mx-auto max-w-[1280px] text-center">
					<h2 className="font-heading text-[1.85rem] font-medium tracking-[-0.02em] text-gold lg:text-[2.75rem]">
						What We Stand For
					</h2>
					<ul className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-3 lg:gap-10">
						{ABOUT_PILLARS.map((pillar) => (
							<li key={pillar.title}>
								<h3 className="text-[1.15rem] font-semibold text-gold-soft lg:text-[1.25rem]">
									{pillar.title}
								</h3>
								<p className="mx-auto mt-3 max-w-sm whitespace-pre-line text-[0.95rem] leading-relaxed text-white/80 lg:text-[1.05rem]">
									{pillar.description}
								</p>
							</li>
						))}
					</ul>
				</div>
			</section>
			<section className="px-5 py-16 lg:px-8 lg:py-24">
				<div className="mx-auto max-w-[1280px]">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="font-heading text-[1.85rem] leading-tight font-medium tracking-[-0.02em] text-ink lg:text-[2.75rem]">
							Property Management Services
						</h2>
						<p className="mt-4 text-[1.05rem] leading-relaxed text-muted-foreground lg:text-[1.15rem]">
							Raha Stays manages serviced apartments for
							property investors seeking strong returns.
							We handle everything from acquisition to guest
							management.
						</p>
					</div>
					<ul className="mt-10 grid gap-4 lg:mt-14 lg:grid-cols-3 lg:gap-5">
						{ABOUT_MANAGEMENT_SERVICES.map((service) => {
							const Icon = service.icon

							return (
								<li key={service.title}>
									<article className="h-full rounded-2xl border border-[#e6e3db] bg-white p-6 transition-colors hover:border-forest hover:bg-[#f1f5f2] lg:p-7">
										<Icon
											className="size-7 text-forest lg:size-8"
											strokeWidth={1.5}
										/>
										<h3 className="mt-4 text-[1.05rem] font-semibold text-ink">
											{service.title}
										</h3>
										<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
											{service.description}
										</p>
									</article>
								</li>
							)
						})}
					</ul>
					<div className="mt-12 text-center lg:mt-16">
						<a
							href="https://wa.me/254725749544"
							className="inline-flex h-12 items-center justify-center rounded-full bg-forest px-8 text-[0.95rem] font-medium text-gold-soft"
						>
							Discuss Property Management
						</a>
						<p className="mt-4 text-sm text-muted-foreground">
							Or WhatsApp us at{' '}
							<a
								href="https://wa.me/254725749544"
								className="text-ink"
							>
								+254 725 749 544
							</a>
						</p>
					</div>
					<div className="mt-16 text-center lg:mt-20">
						<p className="font-heading text-[1.35rem] text-gold italic lg:text-[1.75rem]">
							“Stay Beautifully. Experience More.”
						</p>
						<p className="mt-4 text-sm text-muted-foreground">
							A brand of Rahalink Ventures Ltd
						</p>
					</div>
				</div>
			</section>
		</main>
	)
}
