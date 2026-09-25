export interface Feature {
	title: string
	description: string
	image: string
	imageAlt: string
	href?: string
}

export const FEATURES: Feature[] = [
	{
		title: 'Beautifully Furnished',
		description:
			'Stylish residences created for comfort and memorable stays.',
		image: '/images/features/furnished.jpg',
		imageAlt: 'Marble kitchen island with grey stools and pendant lights',
	},
	{
		title: 'Professional Housekeeping',
		description:
			'Enjoy a beautifully maintained home throughout your stay.',
		image: '/images/features/housekeeping.jpg',
		imageAlt: 'Balcony seating with a city view at golden hour',
	},
	{
		title: 'Concierge Services',
		description:
			'From airport transfers to private chefs — experience more.',
		image: '/images/features/concierge.jpg',
		imageAlt: 'Rooftop infinity pool at sunset overlooking the city',
		href: '/concierge',
	},
]
