import type { Metadata } from 'next'
import localFont from 'next/font/local'

import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { NewsletterCta } from '@/components/layout/newsletter-cta'

import './globals.css'

const playfair = localFont({
	src: [
		{
			path: '../fonts/playfair-latin.woff2',
			weight: '400 700',
			style: 'normal',
		},
		{
			path: '../fonts/playfair-italic-latin.woff2',
			weight: '400 700',
			style: 'italic',
		},
	],
	variable: '--font-playfair',
	display: 'swap',
})

const outfit = localFont({
	src: [
		{
			path: '../fonts/outfit-latin.woff2',
			weight: '300 700',
			style: 'normal',
		},
	],
	variable: '--font-outfit',
	display: 'swap',
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
			<body
				className="flex min-h-full flex-col bg-cream text-ink"
				suppressHydrationWarning
			>
				<SiteHeader />
				{children}
				<NewsletterCta />
				<SiteFooter />
			</body>
		</html>
	)
}
