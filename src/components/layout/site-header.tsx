'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

import { LogoMark } from '@/components/brand/logo-mark'
import { Button } from '@/components/ui/button'
import { NAV_LINKS } from '@/data/navigation'

export function SiteHeader () {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const pathname = usePathname()

	function handleCloseMenu () {
		setIsMenuOpen(false)
	}

	return (
		<header className="sticky top-0 z-40 border-b border-[#e6e3db] bg-cream/70 px-5 backdrop-blur-md lg:px-8">
			<div className="relative mx-auto flex h-[3.75rem] w-full max-w-[1280px] items-center justify-between lg:h-20">
				<Link
					href="/"
					className="flex items-center gap-2.5"
					aria-label="Raha Stays home"
				>
					<LogoMark size={40} priority />
					<span className="font-heading text-[1.35rem] leading-none font-medium tracking-[-0.01em] text-ink">
						Raha Stays
					</span>
				</Link>
				<nav
					aria-label="Primary"
					className="absolute left-1/2 hidden -translate-x-1/2 lg:block"
				>
					<ul className="flex items-center gap-8">
						{NAV_LINKS.map((link) => {
							const isActive = pathname === link.href

							return (
							<li key={link.label}>
								<Link
									href={link.href}
									className={
										isActive
											? 'text-[0.95rem] font-semibold text-ink'
											: 'text-[0.95rem] font-medium text-ink'
									}
								>
									{link.label}
								</Link>
							</li>
							)
						})}
					</ul>
				</nav>
				<div className="flex items-center">
					<Link
						href="/contact"
						className="hidden h-11 items-center rounded-full bg-forest px-6 text-[0.95rem] font-medium text-gold-soft lg:inline-flex"
					>
						Book Your Stay
					</Link>
					<Button
						variant="ghost"
						size="icon"
						aria-label="Open menu"
						aria-expanded={isMenuOpen}
						className="size-10 text-ink hover:bg-transparent lg:hidden"
						onClick={() => setIsMenuOpen(true)}
					>
						<Menu className="size-6" strokeWidth={1.75} />
					</Button>
				</div>
			</div>
			{isMenuOpen ? (
				<div className="fixed inset-0 z-50 flex flex-col bg-cream lg:hidden">
					<div className="flex h-[3.75rem] shrink-0 items-center justify-between px-5">
						<Link
							href="/"
							className="flex items-center gap-2.5"
							onClick={handleCloseMenu}
						>
							<LogoMark size={40} />
							<span className="font-heading text-[1.35rem] leading-none font-medium tracking-[-0.01em] text-ink">
								Raha Stays
							</span>
						</Link>
						<Button
							variant="ghost"
							size="icon"
							aria-label="Close menu"
							className="size-10 text-ink hover:bg-transparent"
							onClick={handleCloseMenu}
						>
							<X className="size-6" strokeWidth={1.5} />
						</Button>
					</div>
					<nav className="flex min-h-0 flex-1 flex-col px-6 pt-8">
						<ul className="flex flex-col gap-7">
							{NAV_LINKS.map((link) => (
								<li key={link.label}>
									<Link
										href={link.href}
										className="text-[1.35rem] font-medium tracking-[-0.01em] text-ink"
										onClick={handleCloseMenu}
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
						<div className="mt-auto pb-8">
							<Link
								href="/contact"
								className="flex h-14 w-full items-center justify-center rounded-full bg-forest text-[1.05rem] font-medium text-gold-soft"
								onClick={handleCloseMenu}
							>
								Book Your Stay
							</Link>
						</div>
					</nav>
				</div>
			) : null}
		</header>
	)
}
