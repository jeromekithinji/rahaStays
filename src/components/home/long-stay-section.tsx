import Link from 'next/link'

export function LongStaySection () {
	return (
		<section
			id="long-stay"
			className="scroll-mt-[3.75rem] bg-cream px-5 py-14 lg:scroll-mt-20 lg:px-8 lg:py-16"
		>
			<div className="mx-auto flex max-w-[1280px] flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
				<div className="max-w-xl">
					<h2 className="font-heading text-[1.75rem] leading-tight font-medium tracking-[-0.02em] text-ink lg:text-[2.15rem]">
						Staying 14+ nights?
					</h2>
					<p className="mt-3 text-[1.05rem] leading-relaxed text-muted-foreground lg:text-lg">
						Get personalised long-stay rates for extended
						stays and relocations.
					</p>
				</div>
				<Link
					href="/contact"
					className="inline-flex h-12 shrink-0 items-center justify-center rounded-full border border-forest px-7 text-[0.95rem] font-medium text-forest"
				>
					Request Long-Stay Rate
				</Link>
			</div>
		</section>
	)
}
