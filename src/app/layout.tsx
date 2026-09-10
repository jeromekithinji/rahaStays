import type { Metadata } from 'next'
import { Outfit, Playfair_Display } from 'next/font/google'

import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'

import './globals.css'

const playfair = Playfair_Display({
	variable: '--font-playfair',
	subsets: ['latin'],
	style: ['normal', 'italic'],
	weight: ['400', '500', '600', '700'],
})

const outfit = Outfit({
	variable: '--font-outfit',
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
	title: 'Raha Stays',
	description:
		'Thoughtfully designed serviced residences with the comfort of home and the convenience of hospitality.',
}

export default function RootLayout ({
	children,
}: LayoutProps<'/'>) {
	return (
		<html
			lang="en"
			className={`${playfair.variable} ${outfit.variable} h-full antialiased`}
			suppressHydrationWarning
		>
			<body className="flex min-h-full flex-col bg-cream text-ink">
				<SiteHeader />
				{children}
				<SiteFooter />
			</body>
		</html>
	)
}
