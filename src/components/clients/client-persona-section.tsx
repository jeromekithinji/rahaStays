import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'

import type { ClientPersona } from '@/data/clients'

interface ClientPersonaSectionProps {
	persona: ClientPersona
	imageOnLeft: boolean
	background: 'white' | 'warm'
}

export function ClientPersonaSection ({
	persona,
	imageOnLeft,
	background,
}: ClientPersonaSectionProps) {
	const Icon = persona.icon

	return (
		<section
			id={persona.id}
			className={[
				'scroll-mt-[4.5rem] px-5 py-12 lg:scroll-mt-24 lg:px-8 lg:py-16',
				background === 'white' ? 'bg-white' : 'bg-[#F0E9E1]',
			].join(' ')}
		>
			<div
				className={[
					'mx-auto grid max-w-[1280px] gap-8 lg:items-center lg:gap-12',
					imageOnLeft
						? 'lg:grid-cols-[minmax(0,22rem)_1fr] xl:grid-cols-[minmax(0,26rem)_1fr]'
						: 'lg:grid-cols-[1fr_minmax(0,22rem)] xl:grid-cols-[1fr_minmax(0,26rem)]',
				].join(' ')}
			>
				<div
					className={[
						'relative order-1 mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl lg:mx-0 lg:max-w-none',
						imageOnLeft ? 'lg:order-1' : 'lg:order-2',
					].join(' ')}
				>
					<Image
						src={persona.image}
						alt={persona.imageAlt}
						fill
						className="object-cover"
						sizes="(min-width: 1024px) 26rem, 100vw"
					/>
				</div>
				<div
					className={[
						'order-2',
						imageOnLeft ? 'lg:order-2' : 'lg:order-1',
					].join(' ')}
				>
					<div className="flex items-center gap-3">
						<span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[#d9d4cb] bg-white">
							<Icon
								className="size-5 text-ink"
								strokeWidth={1.6}
							/>
						</span>
						<h2 className="font-heading text-[1.85rem] leading-tight font-medium tracking-[-0.02em] text-ink lg:text-[2.35rem]">
							{persona.title}
						</h2>
					</div>
					<p className="mt-4 max-w-xl text-[1.05rem] leading-relaxed text-muted-foreground lg:text-[1.1rem]">
						{persona.description}
					</p>
					<div className="mt-7 grid gap-8 sm:grid-cols-2 lg:mt-8">
						<div>
							<p className="text-[0.7rem] font-semibold tracking-[0.14em] text-gold uppercase">
								Ideal for
							</p>
							<ul className="mt-3 space-y-2.5">
								{persona.idealFor.map((item) => (
									<li
										key={item}
										className="flex items-start gap-2.5 text-[0.95rem] text-ink"
									>
										<Check
											className="mt-0.5 size-4 shrink-0 text-ink"
											strokeWidth={1.75}
										/>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
						<div>
							<p className="text-[0.7rem] font-semibold tracking-[0.14em] text-gold uppercase">
								What you get
							</p>
							<ul className="mt-3 space-y-2.5">
								{persona.whatYouGet.map((item) => (
									<li
										key={item}
										className="flex items-start gap-2.5 text-[0.95rem] text-ink"
									>
										<Check
											className="mt-0.5 size-4 shrink-0 text-ink"
											strokeWidth={1.75}
										/>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
					<Link
						href={persona.ctaHref}
						className="mt-8 inline-flex h-12 cursor-pointer items-center justify-center rounded-full bg-forest px-7 text-[0.95rem] font-medium text-gold-soft transition-colors hover:bg-forest-deep"
					>
						{persona.ctaLabel}
					</Link>
				</div>
			</div>
		</section>
	)
}
