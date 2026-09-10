import type { LucideIcon } from 'lucide-react'
import {
	Car,
	ChefHat,
	ClipboardList,
	Map,
	Plane,
	ShoppingBag,
	Sparkles,
	UtensilsCrossed,
} from 'lucide-react'

export interface ConciergeService {
	title: string
	description: string
	icon: LucideIcon
}

export const CONCIERGE_SERVICES: ConciergeService[] = [
	{
		title: 'Airport Transfers',
		description:
			'Private airport pick-up and drop-off arrangements.',
		icon: Plane,
	},
	{
		title: 'Tours & Experiences',
		description:
			'Discover Nairobi and Kenya through curated local experiences.',
		icon: Map,
	},
	{
		title: 'Spa Bookings',
		description:
			'Let us arrange wellness and spa experiences during your stay.',
		icon: Sparkles,
	},
	{
		title: 'Private Chef',
		description:
			'Enjoy personalised meals prepared in the comfort of your residence.',
		icon: ChefHat,
	},
	{
		title: 'Car Rental',
		description:
			'Convenient vehicle rental arrangements for your stay.',
		icon: Car,
	},
	{
		title: 'Shopping Concierge',
		description:
			'Allow our team to assist with shopping before or during your stay.',
		icon: ShoppingBag,
	},
	{
		title: 'Errands Concierge',
		description:
			'Need something handled? Raha Concierge can assist with selected errands.',
		icon: ClipboardList,
	},
	{
		title: 'Dining & Entertainment',
		description:
			'Restaurant reservations, entertainment recommendations and experience bookings.',
		icon: UtensilsCrossed,
	},
]

export interface ConciergeStep {
	number: string
	title: string
	description: string
}

export const CONCIERGE_STEPS: ConciergeStep[] = [
	{
		number: '01',
		title: 'Tell Us What You Need',
		description:
			'Share your preferences via WhatsApp, email or the booking form.',
	},
	{
		number: '02',
		title: 'We Arrange Everything',
		description:
			'Our concierge team handles all bookings, logistics and coordination.',
	},
	{
		number: '03',
		title: 'Enjoy Your Experience',
		description:
			'Sit back and enjoy — we take care of the details.',
	},
]
