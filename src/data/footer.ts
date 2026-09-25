export interface FooterLink {
	href: string
	label: string
}

export interface FooterSocialLink extends FooterLink {
	id: 'instagram' | 'facebook' | 'linkedin' | 'tiktok'
}

export const FOOTER_SOCIAL: FooterSocialLink[] = [
	{ id: 'instagram', href: '#', label: 'Instagram' },
	{ id: 'facebook', href: '#', label: 'Facebook' },
	{ id: 'linkedin', href: '#', label: 'LinkedIn' },
	{ id: 'tiktok', href: '#', label: 'TikTok' },
]

export const FOOTER_EXPLORE: FooterLink[] = [
	{ href: '/stays', label: 'Stays' },
	{ href: '/concierge', label: 'Concierge' },
	{ href: '/about', label: 'About' },
	{ href: '/contact', label: 'Contact' },
]

export const FOOTER_SERVICES: FooterLink[] = [
	{ href: '/stays', label: 'Corporate Stays' },
	{ href: '/#long-stay', label: 'Extended Stays' },
	{ href: '/#invest', label: 'Property Management' },
	{ href: '/contact', label: 'FAQs' },
]

export const FOOTER_LEGAL: FooterLink[] = [
	{ href: '#', label: 'Privacy Policy' },
	{ href: '#', label: 'Terms & Conditions' },
	{ href: '#', label: 'Booking Terms' },
	{ href: '#', label: 'Cancellation Policy' },
	{ href: '#', label: 'House Rules' },
]
