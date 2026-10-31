import { ABOUT_VALUES } from '@/data/about'

export function AboutSection () {
	return (
		<section
			id="about"
			className="bg-forest px-5 py-14 lg:px-8 lg:py-20"
		>
			<div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
				<div>
					<h2 className="font-heading text-[1.75rem] leading-tight font-medium tracking-[-0.02em] text-gold lg:text-[2.35rem]">
						About Raha Stays
					</h2>
					<p className="mt-4 max-w-xl text-[1.05rem] leading-relaxed text-white/90 lg:mt-5 lg:text-[1.15rem]">
						Raha Stays is a premium serviced accommodation brand
						offering beautifully furnished residences across
						Kenya. We create spaces where guests feel at home
						while experiencing more.
					</p>
				</div>
				<ul className="grid grid-cols-2 gap-3 lg:gap-4">
					{ABOUT_VALUES.map((value) => {
						const Icon = value.icon

						return (
							<li key={value.title}>
								<div className="flex h-full flex-col rounded-2xl border border-gold/40 bg-transparent p-5 transition-colors hover:bg-[#2a4030] lg:p-6">
									<Icon
										className="size-7 text-gold lg:size-8"
										strokeWidth={1.5}
									/>
									<h3 className="font-heading mt-4 text-[0.95rem] font-medium text-gold lg:text-base">
										{value.title}
									</h3>
									<p className="mt-1.5 text-sm leading-snug text-white/85">
										{value.description}
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
