'use client'

import { useState } from 'react'

import { PropertyEnquiryModal } from '@/components/home/property-enquiry-modal'
import { INVESTOR_CARDS } from '@/data/investor-services'

export function InvestSection () {
	const [enquiryOpen, setEnquiryOpen] = useState(false)

	return (
		<section
			id="invest"
			className="bg-forest px-5 py-16 lg:px-8 lg:py-24"
		>
			<div className="mx-auto grid max-w-[1280px] gap-5 lg:grid-cols-2 lg:gap-6">
				{INVESTOR_CARDS.map((card) => (
					<article
						key={card.id}
						className="flex flex-col rounded-3xl border border-gold/25 bg-[#243a2c] p-6 lg:p-8"
					>
						<h2 className="font-heading text-[1.45rem] leading-tight font-medium tracking-[-0.02em] text-gold lg:text-[1.85rem]">
							{card.title}
						</h2>
						<p className="mt-4 text-[0.95rem] leading-relaxed text-white/90 lg:text-[1.05rem]">
							{card.description}
						</p>
						<ul className="mt-7 grid flex-1 grid-cols-2 content-start gap-2.5 lg:mt-8 lg:gap-3">
							{card.services.map((service) => {
								const Icon = service.icon

								return (
									<li key={service.label}>
										<div className="flex h-[49px] w-full items-center gap-2.5 rounded-xl border border-gold/35 bg-transparent px-3 transition-colors hover:bg-[#2a4030] lg:gap-3 lg:px-4">
											<Icon
												className="size-4 shrink-0 text-gold lg:size-5"
												strokeWidth={1.6}
											/>
											<p className="truncate text-[0.8rem] font-medium text-white lg:text-sm">
												{service.label}
											</p>
										</div>
									</li>
								)
							})}
						</ul>
						<button
							type="button"
							onClick={() => setEnquiryOpen(true)}
							className="mt-8 inline-flex h-12 w-fit cursor-pointer items-center rounded-full bg-gold px-7 text-[0.95rem] font-medium text-forest transition-colors hover:bg-gold-soft"
						>
							{card.cta}
						</button>
					</article>
				))}
			</div>
			<PropertyEnquiryModal
				open={enquiryOpen}
				onOpenChange={setEnquiryOpen}
			/>
		</section>
	)
}
