import type { LucideIcon } from 'lucide-react'
import { Mail, MapPin, Phone } from 'lucide-react'

export interface ContactMethod {
	title: string
	value: string
	href: string
	icon: LucideIcon
}

export const CONTACT_METHODS: ContactMethod[] = [
	{
		title: 'Email',
		value: 'bookings@rahalink.com',
		href: 'mailto:bookings@rahalink.com',
		icon: Mail,
	},
	{
		title: 'WhatsApp',
		value: '+254 725 749 544',
		href: 'https://wa.me/254725749544',
		icon: Phone,
	},
	{
		title: 'Locations',
		value: 'Nairobi, Kenya',
		href: '/#locations',
		icon: MapPin,
	},
]

export const ENQUIRY_SUBJECTS = [
	{ value: 'book-a-stay', label: 'Book a Stay' },
	{ value: 'concierge', label: 'Concierge Services' },
	{ value: 'corporate', label: 'Corporate Accommodation' },
	{ value: 'long-stay', label: 'Long Stay Rates' },
	{ value: 'property-management', label: 'Property Management' },
	{ value: 'other', label: 'Other' },
]

export const PREFERRED_LOCATIONS = [
	{ value: 'nairobi', label: 'Nairobi' },
	{ value: 'kilimani', label: 'Kilimani' },
	{ value: 'westlands', label: 'Westlands' },
	{ value: 'mombasa', label: 'Mombasa' },
	{ value: 'other', label: 'Other' },
]
