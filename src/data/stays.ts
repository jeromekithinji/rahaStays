export type StayFilter =
	| 'all'
	| 'apartments'
	| 'villas'
	| 'nairobi'
	| 'mombasa'
	| 'long-stays'
	| 'corporate'

export interface Stay {
	id: string
	title: string
	location: string
	beds?: number
	baths?: number
	guests?: number
	summary?: string
	image?: string
	isComingSoon?: boolean
	filters: StayFilter[]
}

export const STAY_FILTERS: { id: StayFilter; label: string }[] = [
	{ id: 'all', label: 'All Stays' },
	{ id: 'apartments', label: 'Apartments' },
	{ id: 'villas', label: 'Villas' },
	{ id: 'nairobi', label: 'Nairobi' },
	{ id: 'mombasa', label: 'Mombasa' },
	{ id: 'long-stays', label: 'Long Stays' },
	{ id: 'corporate', label: 'Corporate' },
]

export const STAYS: Stay[] = [
	{
		id: 'riara-one',
		title: 'Riara One by Raha Stays',
		location: 'Kilimani, Nairobi',
		beds: 2,
		baths: 2,
		guests: 4,
		summary: 'Premium Fully Serviced 2-Bedroom Apartment',
		image: '/images/stays/riara-one.jpg',
		filters: ['apartments', 'nairobi', 'long-stays', 'corporate'],
	},
	{
		id: 'zenith-gardens',
		title: 'Zenith Gardens by Raha',
		location: 'Kilimani, Nairobi',
		beds: 1,
		baths: 1,
		guests: 2,
		summary: 'Premium Fully Serviced 1-Bedroom Apartment',
		image: '/images/stays/zenith-gardens.jpg',
		filters: ['apartments', 'nairobi', 'long-stays', 'corporate'],
	},
	{
		id: 'vipingo-ridge',
		title: 'Vipingo Ridge by Raha Stays',
		location: 'Vipingo, Kenya Coast',
		isComingSoon: true,
		filters: ['villas', 'mombasa'],
	},
]
