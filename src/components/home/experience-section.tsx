import Image from 'next/image'

import { FEATURES } from '@/data/features'

export function ExperienceSection () {
	return (
		<section
			id="experience"
			className="px-5 pb-10 pt-10 lg:px-8 lg:pb-14 lg:pt-16"
		>
			<div className="mx-auto max-w-[1280px]">
				<h2 className="font-heading max-w-xl text-[1.55rem] leading-tight font-medium tracking-[-0.02em] text-ink lg:text-[2.15rem]">
					More Than Somewhere to Sleep
				</h2>
				<p className="mt-4 max-w-xl text-[1.05rem] leading-relaxed text-muted-foreground lg:text-lg">
					Every residence is carefully selected, professionally
					prepared and supported by services designed to make
					your stay effortless.
				</p>
				<div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-3 lg:gap-8">
					{FEATURES.map((feature) => (
						<article key={feature.title}>
							<div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
								<Image
									src={feature.image}
									alt={feature.imageAlt}
									fill
									className="object-cover"
									sizes="(min-width: 1024px) 33vw, 100vw"
								/>
							</div>
							<h3 className="mt-5 text-[1.05rem] font-semibold text-ink">
								{feature.title}
							</h3>
							<p className="mt-2 text-base leading-relaxed text-muted-foreground lg:text-[1.05rem]">
								{feature.description}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
