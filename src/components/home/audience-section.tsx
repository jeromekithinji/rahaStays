import { AUDIENCES } from '@/data/audiences'

export function AudienceSection () {
	return (
		<section
			id="who"
			className="bg-cream px-5 pt-10 pb-16 lg:px-8 lg:pt-14 lg:pb-24"
		>
			<div className="mx-auto max-w-[1280px]">
				<h2 className="font-heading text-[1.55rem] leading-tight font-medium tracking-[-0.02em] text-ink lg:text-[2.15rem]">
					A Stay Designed Around You
				</h2>
				<p className="mt-3 text-[1.05rem] text-muted-foreground lg:text-lg">
					Who stays with Raha Stays?
				</p>
				<ul className="mt-6 grid grid-cols-2 justify-items-center gap-3 lg:mt-8 lg:grid-cols-6 lg:gap-5">
					{AUDIENCES.map((audience) => {
						const Icon = audience.icon

						return (
							<li key={audience.label} className="w-full max-w-[191px]">
								<div className="flex h-[93px] w-full flex-col items-center justify-center rounded-xl border border-[#e6e3db] bg-white px-3 text-center transition-colors hover:border-forest hover:bg-[#f3f6f3]">
									<Icon
										className="size-7 text-forest"
										strokeWidth={2}
									/>
									<p className="mt-2 text-[0.95rem] font-medium text-ink">
										{audience.label}
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
