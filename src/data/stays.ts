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
		image: '/images/stays/riara-one/living-space-1.jpg',
		images: [
			'/images/stays/riara-one/living-space-1.jpg',
			'/images/stays/riara-one/dining-room-1.jpg',
			'/images/stays/riara-one/master-bedroom-1.jpg',
			'/images/stays/riara-one/kitchen-1.jpg',
			'/images/stays/riara-one/tv-room-1.jpg',
			'/images/stays/riara-one/twin-bedroom-1.jpg',
			'/images/stays/riara-one/living-space-2.jpg',
			'/images/stays/riara-one/living-space-3.jpg',
			'/images/stays/riara-one/dining-room-2.jpg',
			'/images/stays/riara-one/tv-room-2.jpg',
			'/images/stays/riara-one/twin-bedroom-2.jpg',
			'/images/stays/riara-one/kitchen-2.jpg',
			'/images/stays/riara-one/bathroom.jpg',
			'/images/stays/riara-one/balcony.jpg',
			'/images/stays/riara-one/welcome-message.jpg',
		],
		filters: ['apartments', 'nairobi', 'long-stays', 'corporate'],
		propertyLabel: 'Entire serviced apartment',
		pricePerNight: 18000,
		currency: 'KES',
		sleepSpaces: [
			{
				title: 'Bedroom 1',
				detail: '1 king bed',
				image: '/images/stays/riara-one/master-bedroom-1.jpg',
			},
			{
				title: 'Bedroom 2',
				detail: '2 twin beds',
				image: '/images/stays/riara-one/twin-bedroom-1.jpg',
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
		location: 'Brookside Gardens, Westlands',
		beds: 3,
		guests: 6,
		summary: 'Spacious 3-Bedroom Apartment in Westlands',
		description: [
			'Located in Brookside Gardens, Westlands, Zenith Gardens offers spacious 3-bedroom apartments designed for comfortable city living.',
			'The development combines generous living spaces with a quiet residential setting, while remaining close to Westlands’ shopping, dining and business hubs.',
		],
		image: '/images/stays/zenith-gardens/outside-building-1.jpg',
		images: [
			'/images/stays/zenith-gardens/outside-building-1.jpg',
			'/images/stays/zenith-gardens/living.jpg',
		],
		filters: ['apartments', 'nairobi', 'long-stays', 'corporate'],
		propertyLabel: 'Entire serviced apartment',
		pricePerNight: 14000,
		currency: 'KES',
		sleepSpaces: [
			{
				title: 'Bedroom 1',
				detail: '1 king bed',
				image: '/images/stays/zenith-gardens/living.jpg',
			},
			{
				title: 'Bedroom 2',
				detail: '1 queen bed',
				image: '/images/stays/zenith-gardens/living.jpg',
			},
			{
				title: 'Bedroom 3',
				detail: '1 queen bed',
				image: '/images/stays/zenith-gardens/living.jpg',
			},
		],
		amenities: [
			{ label: '3 spacious bedrooms', icon: 'bed', category: 'Bedroom and laundry' },
			{ label: 'Living and dining area', icon: 'sparkles', category: 'Kitchen and dining' },
			{ label: 'Private balcony', icon: 'balcony', category: 'Outdoor' },
			{ label: 'Swimming pool', icon: 'waves', category: 'Parking and facilities' },
			{ label: 'Landscaped gardens', icon: 'mountain', category: 'Outdoor' },
			{ label: 'Secure parking', icon: 'car', category: 'Parking and facilities' },
			{ label: '24-hour security', icon: 'shield', category: 'Parking and facilities' },
			{ label: 'CCTV surveillance', icon: 'shield', category: 'Parking and facilities' },
			{ label: 'Controlled access', icon: 'shield', category: 'Parking and facilities' },
			{ label: 'Convenient Westlands location', icon: 'sparkles', category: 'Scenic views' },
			{ label: 'Easy access to shopping centres, restaurants and business districts', icon: 'sparkles', category: 'Scenic views' },
		],
		neighborhood: 'Brookside Gardens, Westlands',
		neighborhoodHighlights: [
			'A quiet residential setting in Brookside Gardens with easy access to Westlands’ shopping, dining and business hubs.',
		],
		mapEmbedUrl:
			'https://www.openstreetmap.org/export/embed.html?bbox=36.790%2C-1.275%2C36.820%2C-1.255&layer=mapnik&marker=-1.265%2C36.805',
		mapLink: 'https://maps.google.com/?q=Brookside+Gardens+Westlands+Nairobi',
	},
	{
		id: 'vipingo-ridge',
		title: 'Vipingo Ridge',
		location: 'Vipingo, Kenya Coast',
		beds: 3,
		baths: 3,
		guests: 6,
		summary: '3-Bedroom Coastal Villa with Ocean Views',
		description: [
			'Set high on the ridge with beautiful views over landscaped gardens and the Indian Ocean, Vipingo Ridge’s 3-bedroom villas combine contemporary comfort with coastal Swahili-inspired design.',
			'Each villa accommodates up to six guests, with three air-conditioned ensuite bedrooms, spacious living and dining areas, a fully equipped kitchen, and private veranda and terrace spaces. Guests also have access to the shared villa swimming pool.',
		],
		filters: ['villas', 'mombasa'],
		propertyLabel: 'Entire villa',
		image: '/images/stays/vipingo-ridge/side-view-1.jpg',
		images: [
			'/images/stays/vipingo-ridge/side-view-1.jpg',
			'/images/stays/vipingo-ridge/living-room-1.jpg',
			'/images/stays/vipingo-ridge/inside-window-1.jpg',
			'/images/stays/vipingo-ridge/kitchen-1.jpg',
			'/images/stays/vipingo-ridge/rooftop-1.jpg',
			'/images/stays/vipingo-ridge/outside.jpg',
			'/images/stays/vipingo-ridge/front-night.jpg',
			'/images/stays/vipingo-ridge/rooftop.jpg',
		],
		sleepSpaces: [
			{
				title: 'Bedroom 1',
				detail: '1 king bed · Ensuite',
				image: '/images/stays/vipingo-ridge/inside-window-1.jpg',
			},
			{
				title: 'Bedroom 2',
				detail: '1 queen bed · Ensuite',
				image: '/images/stays/vipingo-ridge/inside-window-1.jpg',
			},
			{
				title: 'Bedroom 3',
				detail: '1 queen bed · Ensuite',
				image: '/images/stays/vipingo-ridge/inside-window-1.jpg',
			},
		],
		neighborhood: 'Vipingo, Kenya Coast',
		neighborhoodHighlights: [
			'Vipingo Ridge sits above landscaped gardens with views toward the Indian Ocean. Guests enjoy resort living with golf, tennis, padel, an equestrian centre, nature trails and beach access nearby.',
		],
		amenities: [
			{ label: '3 ensuite bedrooms', icon: 'bed', category: 'Bedroom and laundry' },
			{ label: 'Air conditioning', icon: 'wind', category: 'Heating and cooling' },
			{ label: 'Fully equipped kitchen', icon: 'utensils', category: 'Kitchen and dining' },
			{ label: 'Spacious living and dining areas', icon: 'sparkles', category: 'Kitchen and dining' },
			{ label: 'Private terrace or veranda', icon: 'balcony', category: 'Outdoor' },
			{ label: 'Swimming pool access', icon: 'waves', category: 'Outdoor' },
			{ label: 'Complimentary Wi-Fi', icon: 'wifi', category: 'Internet and office' },
			{ label: 'Championship 18-hole golf course', icon: 'mountain', category: 'Parking and facilities' },
			{ label: 'Restaurants and bars', icon: 'coffee', category: 'Kitchen and dining' },
			{ label: 'Gym and fitness facilities', icon: 'dumbbell', category: 'Parking and facilities' },
			{ label: 'Tennis courts', icon: 'sparkles', category: 'Parking and facilities' },
			{ label: 'Padel courts', icon: 'sparkles', category: 'Parking and facilities' },
			{ label: 'Equestrian centre', icon: 'sparkles', category: 'Parking and facilities' },
			{ label: 'Nature and walking trails', icon: 'mountain', category: 'Outdoor' },
			{ label: 'Beach access and activities', icon: 'waves', category: 'Outdoor' },
			{ label: 'Golf buggy access', icon: 'car', category: 'Parking and facilities' },
		],
		mapEmbedUrl:
			'https://www.openstreetmap.org/export/embed.html?bbox=39.780%2C-3.850%2C39.860%2C-3.780&layer=mapnik&marker=-3.815%2C39.820',
		mapLink: 'https://maps.google.com/?q=Vipingo+Ridge+Kenya',
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
