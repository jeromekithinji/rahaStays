export interface NavLink {
	href: string
	label: string
}

export const NAV_LINKS: NavLink[] = [
	{ href: '/', label: 'Home' },
	{ href: '/stays', label: 'Stays' },
	{ href: '/concierge', label: 'Concierge' },
	{ href: '/about', label: 'About' },
	{ href: '/contact', label: 'Contact' },
]
