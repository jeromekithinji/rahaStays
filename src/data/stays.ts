export type StayFilter =
	| 'all'
	| 'apartments'
	| 'villas'
	| 'nairobi'
	| 'mombasa'
	| 'long-stays'
	| 'corporate'

export type AmenityIconId =
	| 'bathtub'
	| 'car'
	| 'coffee'
	| 'droplets'
	| 'dumbbell'
	| 'flame'
	| 'hairDryer'
	| 'hanger'
	| 'mountain'
	| 'shield'
	| 'shirt'
	| 'sparkles'
	| 'spray'
	| 'tv'
	| 'utensils'
	| 'waves'
	| 'wifi'
	| 'wind'
	| 'elevator'
	| 'balcony'
	| 'bed'

export interface StaySleepSpace {
	title: string
	detail: string
	image: string
}

export interface StayAmenity {
	label: string
	icon: AmenityIconId
	category: string
}

export interface Stay {
	id: string
	title: string
	location: string
	beds?: number
	baths?: number
	guests?: number
	summary?: string
	description?: string[]
	image?: string
	images?: string[]
	isComingSoon?: boolean
	filters: StayFilter[]
	propertyLabel?: string
	pricePerNight?: number
	currency?: string
	sleepSpaces?: StaySleepSpace[]
	amenities?: StayAmenity[]
	neighborhood?: string
	neighborhoodHighlights?: string[]
	mapEmbedUrl?: string
	mapLink?: string
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

const nairobiAmenities: StayAmenity[] = [
	{ label: 'City view', icon: 'mountain', category: 'Scenic views' },
	{ label: 'Kitchen', icon: 'utensils', category: 'Kitchen and dining' },
	{ label: 'Wifi', icon: 'wifi', category: 'Internet and office' },
	{ label: 'Free parking', icon: 'car', category: 'Parking and facilities' },
	{ label: 'Air conditioning', icon: 'wind', category: 'Heating and cooling' },
	{ label: 'Washer', icon: 'shirt', category: 'Bedroom and laundry' },
	{ label: 'TV', icon: 'tv', category: 'Entertainment' },
	{ label: 'Hot water', icon: 'droplets', category: 'Bathroom' },
	{ label: 'Coffee maker', icon: 'coffee', category: 'Kitchen and dining' },
	{ label: 'Dedicated workspace', icon: 'sparkles', category: 'Internet and office' },
]

export const STAYS: Stay[] = [
	{
		id: 'riara-one',
		title: 'Riara One Residency',
		location: 'Lavington, Nairobi',
		beds: 2,
		baths: 2,
		guests: 4,
		summary: 'Premium Fully Serviced 2-Bedroom Apartment',
		description: [
			'Enjoy a comfortable stay in this elegant two bedroom apartment at Riara One Residency in Lavington, just behind Junction Mall. Modern finishes, stylish décor and spacious interiors make it a welcoming choice for families, business travellers, couples and longer stays in Nairobi.',
			'The apartment has a bright living area with a large smart TV, a workspace and high speed WiFi. It also includes a fully equipped kitchen, a washing machine, a dining space and comfortable bedrooms. Step onto the private balcony for skyline views and sunsets above the city.',
			'Guests have access to free parking, a fully equipped gym, a heated swimming pool, tight UN-approved security and high speed lifts. Housekeeping and hot showers add comfort throughout the stay. The residence is close to Junction Mall and everyday conveniences.',
		],
		image: '/images/stays/riara-one.jpg',
		images: [
			'/images/stays/riara-one.jpg',
			'/images/features/furnished.jpg',
			'/images/features/housekeeping.jpg',
			'/images/features/concierge.jpg',
			'/images/stays/zenith-gardens.jpg',
		],
		filters: ['apartments', 'nairobi', 'long-stays', 'corporate'],
		propertyLabel: 'Entire serviced apartment',
		pricePerNight: 18000,
		currency: 'KES',
		sleepSpaces: [
			{
				title: 'Bedroom 1',
				detail: '1 king bed',
				image: '/images/stays/riara-one.jpg',
			},
			{
				title: 'Bedroom 2',
				detail: '1 queen bed',
				image: '/images/features/furnished.jpg',
			},
		],
		amenities: [
			{ label: 'City view', icon: 'mountain', category: 'Scenic views' },
			{ label: 'Fully equipped kitchen', icon: 'utensils', category: 'Kitchen and dining' },
			{ label: 'High speed WiFi', icon: 'wifi', category: 'Internet and office' },
			{ label: 'Heated swimming pool', icon: 'waves', category: 'Parking and facilities' },
			{ label: 'Free parking', icon: 'car', category: 'Parking and facilities' },
			{ label: 'Fully equipped gym', icon: 'dumbbell', category: 'Parking and facilities' },
			{ label: 'Washer', icon: 'shirt', category: 'Bedroom and laundry' },
			{ label: 'Smart TV', icon: 'tv', category: 'Entertainment' },
			{ label: 'Hot showers', icon: 'droplets', category: 'Bathroom' },
			{ label: 'Dedicated workspace', icon: 'sparkles', category: 'Internet and office' },
			{ label: 'UN-approved security', icon: 'shield', category: 'Parking and facilities' },
			{ label: 'Coffee maker', icon: 'coffee', category: 'Kitchen and dining' },
			{ label: 'Bathtub', icon: 'bathtub', category: 'Bathroom' },
			{ label: 'Hair dryer', icon: 'hairDryer', category: 'Bathroom' },
			{ label: 'Cleaning products', icon: 'spray', category: 'Bathroom' },
			{ label: 'Hot water', icon: 'droplets', category: 'Bathroom' },
			{ label: 'Hangers', icon: 'hanger', category: 'Bedroom and laundry' },
			{ label: 'Bed linens', icon: 'bed', category: 'Bedroom and laundry' },
			{ label: 'Private balcony', icon: 'balcony', category: 'Outdoor' },
			{ label: 'High speed lifts', icon: 'elevator', category: 'Parking and facilities' },
			{ label: 'Air conditioning', icon: 'wind', category: 'Heating and cooling' },
			{ label: 'Housekeeping', icon: 'sparkles', category: 'Services' },
		],
		neighborhood: 'Lavington, Nairobi',
		neighborhoodHighlights: [
			'The Lavington and Riara area offers leafy surroundings and convenient access to the rest of Nairobi. Kilimani, Kileleshwa, Karen and the central business district are within reach via nearby major roads.',
			'Junction Mall is close by, along with Quickmart, Carrefour, Java House, Artcaffé, restaurants and cafés. International schools, hospitals, gyms and business hubs are also found in the wider area. Whether you are visiting for business, a family trip, medical appointments or leisure, the neighbourhood offers a practical base for short and extended stays.',
		],
		mapEmbedUrl:
			'https://www.openstreetmap.org/export/embed.html?bbox=36.760%2C-1.305%2C36.790%2C-1.285&layer=mapnik&marker=-1.295%2C36.775',
		mapLink: 'https://maps.google.com/?q=Riara+One+Lavington+Nairobi',
	},
	{
		id: 'zenith-gardens',
		title: 'Zenith Gardens',
		location: 'Kilimani, Nairobi',
		beds: 1,
		baths: 1,
		guests: 2,
		summary: 'Premium Fully Serviced 1-Bedroom Apartment',
		image: '/images/stays/zenith-gardens.jpg',
		images: [
			'/images/stays/zenith-gardens.jpg',
			'/images/features/concierge.jpg',
			'/images/features/furnished.jpg',
			'/images/features/housekeeping.jpg',
			'/images/stays/riara-one.jpg',
		],
		filters: ['apartments', 'nairobi', 'long-stays', 'corporate'],
		propertyLabel: 'Entire serviced apartment',
		pricePerNight: 14000,
		currency: 'KES',
		sleepSpaces: [
			{
				title: 'Bedroom',
				detail: '1 queen bed',
				image: '/images/stays/zenith-gardens.jpg',
			},
		],
		amenities: nairobiAmenities,
		neighborhood: 'Kilimani, Nairobi',
		neighborhoodHighlights: [
			'A central Kilimani address with leafy surroundings, nearby dining and fast access across Nairobi. Ideal for couples or solo travellers who want comfort close to the city’s business and leisure hubs.',
		],
		mapEmbedUrl:
			'https://www.openstreetmap.org/export/embed.html?bbox=36.775%2C-1.300%2C36.805%2C-1.280&layer=mapnik&marker=-1.292%2C36.788',
		mapLink: 'https://maps.google.com/?q=Kilimani+Nairobi',
	},
	{
		id: 'vipingo-ridge',
		title: 'Vipingo Ridge',
		location: 'Vipingo, Kenya Coast',
		isComingSoon: true,
		filters: ['villas', 'mombasa'],
		propertyLabel: 'Entire villa',
		neighborhood: 'Vipingo, Kenya Coast',
		neighborhoodHighlights: [
			'Coastal living near golf, beaches and the Indian Ocean — coming soon to Raha Stays.',
		],
		amenities: [
			{ label: 'Ocean views', icon: 'waves', category: 'Scenic views' },
			{ label: 'Kitchen', icon: 'utensils', category: 'Kitchen and dining' },
			{ label: 'Wifi', icon: 'wifi', category: 'Internet and office' },
			{ label: 'Outdoor dining', icon: 'flame', category: 'Outdoor' },
		],
	},
]

export function getStayById (id: string) {
	return STAYS.find((stay) => stay.id === id)
}

export function formatStayPrice (stay: Stay) {
	if (!stay.pricePerNight || !stay.currency) return null

	return new Intl.NumberFormat('en-KE', {
		style: 'currency',
		currency: stay.currency,
		maximumFractionDigits: 0,
	}).format(stay.pricePerNight)
}
