import Link from 'next/link'

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
							<li
								key={audience.label}
								className="group relative w-full max-w-[191px]"
							>
								<div
									tabIndex={0}
									className="flex h-[93px] w-full flex-col items-center justify-center rounded-xl border border-[#e6e3db] bg-white px-3 text-center transition-colors outline-none hover:border-forest hover:bg-[#f3f6f3] focus-visible:border-forest focus-visible:bg-[#f3f6f3]"
								>
									<Icon
										className="size-7 text-forest"
										strokeWidth={2}
									/>
									<p className="mt-2 text-[0.95rem] font-medium text-ink">
										{audience.label}
									</p>
								</div>
								<div
									role="tooltip"
									className="pointer-events-none absolute top-[calc(100%+0.35rem)] left-1/2 z-30 w-[min(17.5rem,calc(100vw-2.5rem))] -translate-x-1/2 opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100"
								>
									<span
										aria-hidden="true"
										className="absolute bottom-full left-1/2 -mb-px -translate-x-1/2 border-[7px] border-transparent border-b-white drop-shadow-[0_-1px_0_#e6e3db]"
									/>
									<div className="rounded-xl border border-[#e6e3db] bg-white px-3.5 py-3 text-left shadow-[0_12px_32px_rgba(27,48,34,0.14)]">
										<p className="text-[0.85rem] leading-relaxed text-muted-foreground">
											{audience.description}
										</p>
										{audience.learnMoreHref ? (
											<Link
												href={audience.learnMoreHref}
												className="mt-2.5 inline-flex text-[0.85rem] font-medium text-forest underline-offset-2 hover:underline"
											>
												Learn more
											</Link>
										) : null}
									</div>
								</div>
							</li>
						)
					})}
				</ul>
			</div>
		</section>
	)
}
