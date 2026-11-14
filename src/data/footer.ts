export interface FooterLink {
	href: string
	label: string
}

export interface FooterSocialLink extends FooterLink {
	id: 'instagram' | 'facebook' | 'linkedin' | 'tiktok'
}

export const FOOTER_SOCIAL: FooterSocialLink[] = [
	{
		id: 'instagram',
		href: 'https://www.instagram.com/_rahastays?srtk=MTY3ajRvdnM4ZW1iaQ%3D%3D&utm_source=qr',
		label: 'Instagram',
	},
	{
		id: 'facebook',
		href: 'https://www.facebook.com/share/1FQzBvyf8J/?mibextid=wwXIfr',
		label: 'Facebook',
	},
	{ id: 'linkedin', href: '#', label: 'LinkedIn' },
	{
		id: 'tiktok',
		href: 'https://www.tiktok.com/@raha.stays254?_r=1&_t=ZS-9BI0eaVTyMw',
		label: 'TikTok',
	},
]

export const FOOTER_EXPLORE: FooterLink[] = [
	{ href: '/stays', label: 'Stays' },
	{ href: '/concierge', label: 'Concierge' },
	{ href: '/our-clients', label: 'Our Clients' },
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
