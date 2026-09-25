import {
	CONCIERGE_EXPERIENCES,
	CONCIERGE_SERVICES,
	type ConciergeItem,
} from '@/data/concierge'

function ConciergeCard ({ item }: { item: ConciergeItem }) {
	const Icon = item.icon

	return (
		<article className="group h-full rounded-2xl border border-[#e6e3db] bg-white p-6 transition-colors hover:border-forest lg:p-7">
			<div className="flex size-14 items-center justify-center rounded-full bg-[#eef3ef] transition-colors group-hover:bg-[#e4f0e8]">
				<Icon
					className="size-7 text-forest"
					strokeWidth={1.5}
				/>
			</div>
			<h3 className="mt-5 text-[1.05rem] font-semibold text-ink">
				{item.title}
			</h3>
			<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
				{item.description}
			</p>
		</article>
	)
}

export function ConciergeServices () {
	return (
		<div className="space-y-14 lg:space-y-16">
			<section>
				<h2 className="font-heading text-center text-[1.55rem] font-medium tracking-[-0.02em] text-ink lg:text-[2.15rem]">
					Experiences powered by Raha Concierge
				</h2>
				<ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-5">
					{CONCIERGE_EXPERIENCES.map((item) => (
						<li key={item.title}>
							<ConciergeCard item={item} />
						</li>
					))}
				</ul>
			</section>
			<section>
				<h2 className="font-heading text-center text-[1.55rem] font-medium tracking-[-0.02em] text-ink lg:text-[2.15rem]">
					Concierge Services
				</h2>
				<ul className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2 lg:mt-10 lg:gap-5">
					{CONCIERGE_SERVICES.map((item) => (
						<li key={item.title}>
							<ConciergeCard item={item} />
						</li>
					))}
				</ul>
				<p className="mx-auto mt-8 max-w-2xl text-center text-[0.95rem] leading-relaxed text-muted-foreground lg:mt-10 lg:text-base">
					Please contact Raha Concierge to discuss availability,
					arrangements and pricing.
				</p>
			</section>
		</div>
	)
}
