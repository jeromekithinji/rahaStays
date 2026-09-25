import type { LucideIcon } from 'lucide-react'
import {
	ChefHat,
	Gamepad2,
	Map,
	Mountain,
	Plane,
	ShoppingBasket,
	ShoppingBag,
	UtensilsCrossed,
} from 'lucide-react'

export interface ConciergeItem {
	title: string
	description: string
	icon: LucideIcon
}

export const CONCIERGE_EXPERIENCES: ConciergeItem[] = [
	{
		title: 'Airport transfers',
		description:
			'Start and end your stay with a convenient airport transfer arranged around your flight details.',
		icon: Plane,
	},
	{
		title: 'Full day Nairobi city tour',
		description:
			'Explore Nairobi’s landmarks, culture and local highlights on a full day city experience.',
		icon: Map,
	},
	{
		title: 'Full day Lake Naivasha experience',
		description:
			'Enjoy a day away from the city and discover the scenery and activities around Lake Naivasha.',
		icon: Mountain,
	},
	{
		title: 'Dinner at Carnivore',
		description:
			'Enjoy an evening at the famous Carnivore restaurant, known for its game meat dining experience and Simba Saloon.',
		icon: UtensilsCrossed,
	},
	{
		title: 'Bowling and arcade games',
		description:
			'Plan a fun outing for family or friends at bowling venues and arcades across the city.',
		icon: Gamepad2,
	},
	{
		title: 'Shopping at the Maasai markets',
		description:
			'Browse local crafts, jewellery, textiles and gifts at Nairobi’s Maasai markets.',
		icon: ShoppingBag,
	},
]

export const CONCIERGE_SERVICES: ConciergeItem[] = [
	{
		title: 'Private cook',
		description:
			'Enjoy meals prepared in the comfort of your apartment. Raha Concierge can help arrange a private cook for your stay or a special occasion.',
		icon: ChefHat,
	},
	{
		title: 'Grocery shopping',
		description:
			'Arrive to a stocked kitchen or ask Raha Concierge to help source groceries during your stay. Share your shopping list and preferences, and we will coordinate the purchase and delivery.',
		icon: ShoppingBasket,
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
