import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

import { LogoMark } from '@/components/brand/logo-mark'
import { SocialIcon } from '@/components/brand/social-icon'
import {
	FOOTER_EXPLORE,
	FOOTER_LEGAL,
	FOOTER_SERVICES,
	FOOTER_SOCIAL,
} from '@/data/footer'

export function SiteFooter () {
	return (
		<footer className="bg-forest-deep px-5 pt-16 pb-10 lg:px-8 lg:pt-20 lg:pb-8">
			<div className="mx-auto max-w-[1280px]">
				<div className="grid gap-12 lg:grid-cols-4 lg:gap-10">
					<div>
						<Link
							href="/"
							className="flex items-center gap-2.5"
							aria-label="Raha Stays home"
						>
							<LogoMark size={44} />
							<span className="flex flex-col items-start">
								<span className="font-heading text-[1.5rem] leading-none font-medium tracking-[-0.01em] text-gold">
									Raha Stays
								</span>
								<span className="mt-1.5 text-[0.8rem] leading-none font-normal text-[#c9c4b8] italic">
									Experience More.
								</span>
							</span>
						</Link>
					</div>
					<nav aria-label="Explore">
						<h2 className="text-[0.8rem] font-semibold tracking-[0.18em] text-gold">
							EXPLORE
						</h2>
						<ul className="mt-5 flex flex-col gap-3.5">
							{FOOTER_EXPLORE.map((link) => (
								<li key={link.label}>
									<Link
										href={link.href}
										className="text-[1.05rem] text-[#c9c4b8] transition-colors hover:text-gold"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>
					<nav aria-label="Services">
						<h2 className="text-[0.8rem] font-semibold tracking-[0.18em] text-gold">
							SERVICES
						</h2>
						<ul className="mt-5 flex flex-col gap-3.5">
							{FOOTER_SERVICES.map((link) => (
								<li key={link.label}>
									<Link
										href={link.href}
										className="text-[1.05rem] text-[#c9c4b8] transition-colors hover:text-gold"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>
					<div
						id="contact"
						className="scroll-mt-[3.75rem] lg:scroll-mt-20"
					>
						<h2 className="text-[0.8rem] font-semibold tracking-[0.18em] text-gold">
							CONTACT
						</h2>
						<ul className="mt-5 flex flex-col gap-3.5">
							<li>
								<a
									href="mailto:bookings@rahalink.com"
									className="flex items-center gap-2.5 text-[1.05rem] text-[#c9c4b8] transition-colors hover:text-gold"
								>
									<Mail
										className="size-[1.05rem] shrink-0"
										strokeWidth={1.6}
									/>
									bookings@rahalink.com
								</a>
							</li>
							<li>
								<a
									href="tel:+254759285059"
									className="flex items-center gap-2.5 text-[1.05rem] text-[#c9c4b8] transition-colors hover:text-gold"
								>
									<Phone
										className="size-[1.05rem] shrink-0"
										strokeWidth={1.6}
									/>
									+254 759 285 059
								</a>
							</li>
						</ul>
						<ul className="mt-6 flex flex-wrap gap-3">
							{FOOTER_SOCIAL.map((link) => (
								<li key={link.label} className="relative">
									<Link
										href={link.href}
										aria-label={link.label}
										title={link.label}
										className="peer flex size-10 items-center justify-center rounded-full border border-gold/45 text-gold transition-colors hover:border-gold hover:bg-gold/10 focus-visible:border-gold focus-visible:outline-none"
									>
										<SocialIcon
											id={link.id}
											className="size-[1.15rem]"
										/>
									</Link>
									<span
										role="tooltip"
										className="pointer-events-none absolute top-[calc(100%+0.4rem)] left-1/2 z-10 -translate-x-1/2 rounded-md bg-gold px-2 py-1 text-xs font-medium whitespace-nowrap text-forest opacity-0 transition-opacity peer-hover:opacity-100 peer-focus-visible:opacity-100"
									>
										{link.label}
									</span>
								</li>
							))}
						</ul>
						<div className="mt-5 max-w-[18rem] border-t border-white/15 pt-3">
							<p className="text-sm text-[#c9c4b8]">
								A brand of Rahalink Ventures Ltd
							</p>
						</div>
					</div>
				</div>
				<div className="mt-14 border-t border-white/15 pt-6 lg:mt-16">
					<ul className="flex flex-wrap gap-x-6 gap-y-3">
						{FOOTER_LEGAL.map((link) => (
							<li key={link.label}>
								<Link
									href={link.href}
									className="text-[0.95rem] text-[#c9c4b8] transition-colors hover:text-gold"
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	)
}
