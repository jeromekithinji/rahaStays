import { CONCIERGE_SERVICES } from '@/data/concierge'

export function ConciergeServices () {
	return (
		<ul className="grid gap-4 lg:grid-cols-4 lg:gap-5">
			{CONCIERGE_SERVICES.map((service) => {
				const Icon = service.icon

				return (
					<li key={service.title}>
						<article className="group h-full rounded-2xl border border-[#e6e3db] bg-white p-6 transition-colors hover:border-forest lg:p-7">
							<div className="flex size-14 items-center justify-center rounded-full bg-[#eef3ef] transition-colors group-hover:bg-[#e4f0e8]">
								<Icon
									className="size-7 text-forest"
									strokeWidth={1.5}
								/>
							</div>
							<h2 className="mt-5 text-[1.05rem] font-semibold text-ink">
								{service.title}
							</h2>
							<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
								{service.description}
							</p>
						</article>
					</li>
				)
			})}
		</ul>
	)
}
