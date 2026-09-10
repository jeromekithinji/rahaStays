import type { FooterSocialLink } from '@/data/footer'

interface SocialIconProps {
	id: FooterSocialLink['id']
	className?: string
}

export function SocialIcon ({ id, className }: SocialIconProps) {
	const shared = {
		viewBox: '0 0 24 24',
		className,
		'aria-hidden': true as const,
	}

	switch (id) {
		case 'instagram':
			return (
				<svg {...shared} fill="none" stroke="currentColor" strokeWidth="1.8">
					<rect x="3.5" y="3.5" width="17" height="17" rx="5" />
					<circle cx="12" cy="12" r="3.75" />
					<circle
						cx="17.2"
						cy="6.8"
						r="1"
						fill="currentColor"
						stroke="none"
					/>
				</svg>
			)
		case 'facebook':
			return (
				<svg {...shared} fill="currentColor">
					<path d="M14.2 8.2h2.3V5.5h-2.3c-2.1 0-3.8 1.7-3.8 3.8v1.9H8.2v2.8h2.2V20h3.1v-5.9h2.5l.5-2.8h-3V9.3c0-.6.5-1.1 1.1-1.1Z" />
				</svg>
			)
		case 'linkedin':
			return (
				<svg {...shared} fill="currentColor">
					<path d="M6.8 9.4H4.2V19h2.6V9.4ZM5.5 5c-.9 0-1.6.7-1.6 1.6S4.6 8.2 5.5 8.2s1.6-.7 1.6-1.6S6.4 5 5.5 5ZM19.8 12.7c0-2.2-1.4-3.5-3.4-3.5-1.1 0-1.9.5-2.3 1.1V9.4h-2.6c0 .5 0 9.6 0 9.6h2.6v-5.4c0-.3 0-.6.1-.8.3-.6.9-1.2 1.9-1.2 1.3 0 1.9.9 1.9 2.4V19h2.6v-6.3Z" />
				</svg>
			)
		case 'tiktok':
			return (
				<svg {...shared} fill="currentColor">
					<path d="M18.2 9.1c-1.4-.1-2.7-.6-3.7-1.5v6.2c0 2.8-2.3 5.1-5.1 5.1S4.3 16.6 4.3 13.8s2.3-5.1 5.1-5.1c.3 0 .6 0 .9.1v2.9a2.3 2.3 0 0 0-.9-.2c-1.3 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3 2.3-1 2.3-2.3V4.2h2.8c.2 1.5 1 2.9 2.2 3.8.7.5 1.5.8 2.4.9v2.2Z" />
				</svg>
			)
	}
}
