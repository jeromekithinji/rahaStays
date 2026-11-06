import Image from 'next/image'
import Link from 'next/link'

export function AboutSection () {
	return (
		<section
			id="about"
			className="bg-[#F0E9E1] px-5 py-14 lg:px-8 lg:py-20"
		>
			<div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[1.65fr_1fr] lg:items-center lg:gap-14">
				<div>
					<p className="text-[0.75rem] font-medium tracking-[0.14em] text-gold uppercase">
						About Raha Stays
					</p>
					<h2 className="font-heading mt-3 text-[1.85rem] leading-tight font-medium tracking-[-0.02em] text-ink lg:mt-4 lg:text-[2.5rem]">
						Hospitality That Feels Like Home
					</h2>
					<p className="mt-4 text-[1.05rem] leading-relaxed text-muted-foreground lg:mt-5 lg:max-w-none lg:text-[1.1rem]">
						Raha Stays offers thoughtfully designed, fully
						serviced residences in Nairobi and along the Kenyan
						coast. We combine the comfort and privacy of a home
						with the care and convenience of a hotel, from
						professional housekeeping to personalised concierge
						services. Whether you’re here for business, family
						or an extended stay, we make every visit effortless.
					</p>
					<Link
						href="/about"
						className="mt-7 inline-flex h-12 cursor-pointer items-center justify-center rounded-full bg-forest px-7 text-[0.95rem] font-medium text-gold-soft transition-colors hover:bg-forest-deep lg:mt-8"
					>
						Learn More
					</Link>
				</div>
				<div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl lg:mx-0 lg:max-w-[22rem] lg:justify-self-end xl:max-w-[24rem]">
					<Image
						src="/images/features/housekeeping.jpg"
						alt="Balcony seating overlooking green city views at golden hour"
						fill
						className="object-cover"
						sizes="(min-width: 1024px) 24rem, 100vw"
					/>
				</div>
			</div>
		</section>
	)
}
