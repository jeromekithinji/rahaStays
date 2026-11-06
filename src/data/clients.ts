import type { LucideIcon } from 'lucide-react'
import {
	Briefcase,
	Building2,
	Calendar,
	Globe,
	Users,
} from 'lucide-react'

export interface ClientPersona {
	id: string
	title: string
	icon: LucideIcon
	description: string
	idealFor: string[]
	whatYouGet: string[]
	ctaLabel: string
	ctaHref: string
	image: string
	imageAlt: string
}

export const CLIENT_PERSONAS: ClientPersona[] = [
	{
		id: 'business',
		title: 'Business',
		icon: Briefcase,
		description:
			'For professionals who need reliable WiFi, a dedicated workspace and a restful base between meetings.',
		idealFor: [
			'Business Travellers',
			'Consultants',
			'Conference attendees',
		],
		whatYouGet: [
			'High-speed WiFi',
			'Dedicated workspace',
			'Flexible check-in',
			'Airport transfers',
			'Central locations',
		],
		ctaLabel: 'Find a Stay',
		ctaHref: '/stays',
		image: '/images/stays/riara-one/tv-room-1.jpg',
		imageAlt: 'Modern living room with city views for business travellers',
	},
	{
		id: 'families',
		title: 'Families',
		icon: Users,
		description:
			'Spacious, fully equipped homes where everyone has room to relax together.',
		idealFor: ['Holidays', 'Family visits', 'School breaks'],
		whatYouGet: [
			'Multiple bedrooms',
			'Full kitchen',
			'Laundry',
			'Pools and play areas',
			'Secure compounds',
		],
		ctaLabel: 'Find a Stay',
		ctaHref: '/stays',
		image: '/images/features/concierge.jpg',
		imageAlt: 'Rooftop pool with city skyline views for family stays',
	},
	{
		id: 'diaspora',
		title: 'Diaspora',
		icon: Globe,
		description:
			'A comfortable home base for returning visitors reconnecting with Nairobi, family and friends.',
		idealFor: [
			'Holiday visits home',
			'Weddings and family events',
			'Property or business trips',
		],
		whatYouGet: [
			'Room to host family',
			'Flexible stay lengths',
			'Airport pickup',
			'Concierge help with errands',
		],
		ctaLabel: 'Plan Your Visit',
		ctaHref: '/contact',
		image: '/images/features/housekeeping.jpg',
		imageAlt: 'Balcony overlooking green Nairobi neighbourhoods',
	},
	{
		id: 'expats',
		title: 'Expats',
		icon: Building2,
		description:
			'Move-in-ready apartments that make settling into a new city simple and stress-free.',
		idealFor: [
			'New arrivals',
			'NGO and diplomatic staff',
			'People between leases',
		],
		whatYouGet: [
			'Fully furnished homes',
			'Utilities and WiFi included',
			'Housekeeping',
			'Local guidance',
		],
		ctaLabel: 'Request Long-Stay Rate',
		ctaHref: '/#long-stay',
		image: '/images/stays/riara-one/master-bedroom-1.jpg',
		imageAlt: 'Furnished bedroom ready for expat arrivals',
	},
	{
		id: 'corporate',
		title: 'Corporate',
		icon: Briefcase,
		description:
			'Seamless accommodation for teams, relocations and executive visits.',
		idealFor: [
			'Staff relocations',
			'Project teams',
			'Visiting executives',
		],
		whatYouGet: [
			'One point of contact',
			'Consolidated invoicing',
			'Flexible bookings',
			'Premium locations',
			'Priority support',
		],
		ctaLabel: 'Corporate Enquiry',
		ctaHref: '/contact#corporate-enquiry',
		image: '/images/features/furnished.jpg',
		imageAlt: 'Premium kitchen in a corporate serviced residence',
	},
	{
		id: 'extended',
		title: 'Extended',
		icon: Calendar,
		description:
			'Monthly stays with the comfort, space and services of a fully serviced home.',
		idealFor: [
			'Stays of 14+ nights',
			'Relocations',
			'Renovations or sabbaticals',
		],
		whatYouGet: [
			'Discounted long-stay rates',
			'Weekly housekeeping',
			'Full kitchen and laundry',
			'Utilities included',
		],
		ctaLabel: 'Request Long-Stay Rate',
		ctaHref: '/#long-stay',
		image: '/images/stays/riara-one/bathroom.jpg',
		imageAlt: 'Modern bathroom in a long-stay serviced home',
	},
]
