import Image from 'next/image'

import { StaySearch } from '@/components/home/stay-search'

export function Hero () {
	return (
		<section className="relative min-h-[calc(100dvh-3.75rem)] lg:min-h-[640px]">
			<div className="absolute inset-0 z-0 overflow-hidden">
				<Image
					src="/images/hero.png"
					alt="Modern serviced apartment living room with city skyline views"
					fill
					priority
					className="object-cover object-center"
					sizes="100vw"
				/>
				<div className="absolute inset-0 bg-black/35" />
			</div>
			<div className="relative z-[35] flex min-h-[calc(100dvh-3.75rem)] flex-col items-center justify-center px-5 py-12 lg:min-h-[640px] lg:px-8 lg:py-16">
				<div className="mx-auto w-full max-w-xl text-center lg:max-w-2xl">
					<h1 className="font-heading text-[2.15rem] leading-[1.1] font-medium tracking-[-0.02em] text-white lg:text-6xl">
						Stay Beautifully.
					</h1>
					<p className="font-heading mt-1.5 text-[1.35rem] leading-none font-normal text-gold italic lg:mt-2 lg:text-[1.75rem]">
						Experience More.
					</p>
					<p className="mt-3 text-[0.95rem] leading-relaxed font-light text-white/95 lg:mt-3.5 lg:text-base">
						Thoughtfully designed serviced residences with the
						comfort of home and the convenience of hospitality.
					</p>
				</div>
				<div className="mt-6 w-full lg:mt-8">
					<StaySearch />
				</div>
			</div>
		</section>
	)
}
