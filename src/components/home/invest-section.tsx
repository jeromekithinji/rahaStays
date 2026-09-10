import Link from 'next/link'

import { INVESTOR_SERVICES } from '@/data/investor-services'

export function InvestSection () {
	return (
		<section
			id="invest"
			className="bg-forest px-5 py-16 lg:px-8 lg:py-24"
		>
			<div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
				<div>
					<h2 className="font-heading text-[1.55rem] leading-tight font-medium tracking-[-0.02em] text-gold lg:text-[2.15rem]">
						Invest in Serviced Accommodation
					</h2>
					<p className="mt-5 max-w-lg text-[1.05rem] leading-relaxed text-white/90 lg:text-lg">
						Raha Stays manages serviced apartments for
						investors seeking strong ROI. We handle property
						sourcing, interior design, furnishing, dynamic
						pricing and full guest management.
					</p>
					<Link
						href="/contact"
						className="mt-8 inline-flex h-12 items-center rounded-full bg-gold px-7 text-[0.95rem] font-medium text-forest"
					>
						Learn More
					</Link>
				</div>
				<ul className="grid grid-cols-2 justify-items-stretch gap-3 lg:justify-items-start lg:gap-4">
					{INVESTOR_SERVICES.map((service) => {
						const Icon = service.icon

						return (
							<li
								key={service.label}
								className="w-full max-w-[288px]"
							>
								<div className="flex h-[49px] w-full items-center gap-3 rounded-xl border border-gold/40 bg-transparent px-4 transition-colors hover:bg-[#2a4030]">
									<Icon
										className="size-5 shrink-0 text-gold"
										strokeWidth={1.6}
									/>
									<p className="truncate text-sm font-medium text-white">
										{service.label}
									</p>
								</div>
							</li>
						)
					})}
				</ul>
			</div>
		</section>
	)
}
