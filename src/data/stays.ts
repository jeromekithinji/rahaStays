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
		title: 'Vipingo Ridge Swahili Villa',
		location: 'Vipingo Ridge, Kenya Coast',
		beds: 3,
		baths: 4,
		guests: 8,
		summary: 'Private 3-Bedroom Swahili Villa with Pool and Sea Views',
		description: [
			'Set within the secure Vipingo Ridge estate on Kenya’s north coast, this Swahili-style villa offers three bedrooms, a private pool and sweeping views of the sea and landscaped grounds. Open living spaces flow onto a terrace and balcony, with a fully equipped kitchen for relaxed family meals.',
			'Guests enjoy free WiFi, air conditioning, daily housekeeping and laundry service, plus free on-site parking and round-the-clock security.',
			'Beyond the villa, the estate offers golf, tennis, a spa, a kids’ club and dining options, while the Vipingo airstrip is just 1.6 km away. The beach is about 5 km by car, making this a peaceful retreat for families and groups who want space, privacy and resort-style facilities.',
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
				detail: 'Bed type to be confirmed',
				image: '/images/stays/vipingo-ridge/inside-window-1.jpg',
			},
			{
				title: 'Bedroom 2',
				detail: 'Bed type to be confirmed',
				image: '/images/stays/vipingo-ridge/inside-window-1.jpg',
			},
			{
				title: 'Bedroom 3',
				detail: 'Bed type to be confirmed',
				image: '/images/stays/vipingo-ridge/inside-window-1.jpg',
			},
		],
		neighborhood: 'Vipingo Ridge, Kenya Coast',
		neighborhoodHighlights: [
			'Vipingo Ridge is a gated golf and residential estate on the north coast, known for its calm setting and ocean views.',
			'Vipingo airstrip is 1.6 km away, with the golf course within 3 km and the beach about 5 km by car. Mombasa city centre is roughly 32 km away, and Moi International Airport (MBA) is approximately 35–47 km.',
			'There is no shop within walking distance — stock up on groceries before arrival or use our concierge grocery service.',
		],
		amenities: [
			{ label: 'Private pool', icon: 'waves', category: 'Outdoor' },
			{ label: 'Sea view', icon: 'waves', category: 'Scenic views' },
			{ label: 'Free WiFi', icon: 'wifi', category: 'Internet and office' },
			{ label: 'Air conditioning', icon: 'wind', category: 'Heating and cooling' },
			{ label: 'Daily housekeeping', icon: 'sparkles', category: 'Services' },
			{ label: 'Free parking', icon: 'car', category: 'Parking and facilities' },
			{ label: 'Pool view', icon: 'waves', category: 'Scenic views' },
			{ label: 'Balcony', icon: 'balcony', category: 'Outdoor' },
			{ label: 'Terrace', icon: 'balcony', category: 'Outdoor' },
			{ label: 'Fully equipped kitchen', icon: 'utensils', category: 'Kitchen and dining' },
			{ label: 'Laundry service', icon: 'shirt', category: 'Bedroom and laundry' },
			{ label: 'Safety deposit box', icon: 'shield', category: 'Parking and facilities' },
			{ label: 'Non-smoking', icon: 'sparkles', category: 'Services' },
			{ label: 'Cot on request', icon: 'bed', category: 'Bedroom and laundry' },
			{ label: 'Golf course', icon: 'mountain', category: 'Estate facilities' },
			{ label: 'Tennis court', icon: 'sparkles', category: 'Estate facilities' },
			{ label: 'Fitness centre', icon: 'dumbbell', category: 'Estate facilities' },
			{ label: 'Spa and massage', icon: 'sparkles', category: 'Estate facilities' },
			{ label: 'Restaurant and bar', icon: 'coffee', category: 'Estate facilities' },
			{ label: 'Kids’ club and playground', icon: 'sparkles', category: 'Estate facilities' },
			{ label: 'Horse riding', icon: 'mountain', category: 'Estate facilities' },
			{ label: 'Cycling', icon: 'car', category: 'Estate facilities' },
			{ label: 'Hiking', icon: 'mountain', category: 'Estate facilities' },
			{ label: 'Water sports', icon: 'waves', category: 'Estate facilities' },
			{ label: '24-hour security', icon: 'shield', category: 'Estate facilities' },
			{ label: 'Shuttle service (extra charge)', icon: 'car', category: 'Estate facilities' },
		],
		mapEmbedUrl:
			'https://www.openstreetmap.org/export/embed.html?bbox=39.780%2C-3.850%2C39.860%2C-3.780&layer=mapnik&marker=-3.815%2C39.820',
		mapLink: 'https://maps.google.com/?q=Vipingo+Ridge+Kenya',
	},
	{
		id: 'villa-malaika-diani',
		title: 'Villa Malaika Diani',
		location: 'Diani Beach, Kenya Coast',
		beds: 2,
		baths: 2,
		guests: 4,
		summary: '2-Bedroom All Ensuite Villa · 200m to the Beach',
		description: [
			'Located in Diani Beach just 200 metres from the sand with direct beach access, Villa Malaika is a bright 2-bedroom villa where every room is ensuite. Air conditioning in all rooms, WiFi and a smart TV keep the stay comfortable, while the master suite features a private jacuzzi.',
			'Daily housekeeping is included. Outside, enjoy a swimming pool and jacuzzi, plus a massage room, sauna, steam room, pool table and darts. A chef and massage services are available at an extra cost.',
		],
		filters: ['villas', 'mombasa'],
		propertyLabel: 'Entire villa',
		image: '/images/stays/villa-malaika-diani/pool-1.jpg',
		images: [
			'/images/stays/villa-malaika-diani/pool-1.jpg',
			'/images/stays/villa-malaika-diani/exterior-1.jpg',
			'/images/stays/villa-malaika-diani/living-1.jpg',
			'/images/stays/villa-malaika-diani/bedroom-2.jpg',
			'/images/stays/villa-malaika-diani/kitchen-1.jpg',
			'/images/stays/villa-malaika-diani/dining-1.jpg',
			'/images/stays/villa-malaika-diani/bedroom-1.jpg',
			'/images/stays/villa-malaika-diani/bedroom-3.jpg',
			'/images/stays/villa-malaika-diani/bedroom-4.jpg',
			'/images/stays/villa-malaika-diani/bathroom-jacuzzi-1.jpg',
			'/images/stays/villa-malaika-diani/bathroom-2.jpg',
			'/images/stays/villa-malaika-diani/bathroom-3.jpg',
			'/images/stays/villa-malaika-diani/bathroom-4.jpg',
			'/images/stays/villa-malaika-diani/entry-1.jpg',
		],
		sleepSpaces: [
			{
				title: 'Master bedroom',
				detail: 'Ensuite · Jacuzzi',
				image: '/images/stays/villa-malaika-diani/bedroom-2.jpg',
			},
			{
				title: 'Bedroom 2',
				detail: 'Ensuite',
				image: '/images/stays/villa-malaika-diani/bedroom-1.jpg',
			},
		],
		neighborhood: 'Diani Beach, Kenya Coast',
		neighborhoodHighlights: [
			'Diani Beach is one of Kenya’s premier coastal destinations, known for white sand, turquoise water and a relaxed beachfront lifestyle.',
			'Villa Malaika sits about 200 metres from the beach with direct beach access, so the ocean is a short walk from your door.',
			'Shopping centres like Baharini Plaza, Chandarana supermarket and more are about 10 minutes away.',
			'Ukunda Airport is about 10 minutes away.',
		],
		amenities: [
			{ label: 'All rooms ensuite', icon: 'bathtub', category: 'Bathroom' },
			{ label: 'WiFi available', icon: 'wifi', category: 'Internet and office' },
			{ label: 'Air conditioning in all rooms', icon: 'wind', category: 'Heating and cooling' },
			{ label: 'Smart TV', icon: 'tv', category: 'Entertainment' },
			{ label: 'Jacuzzi in master bedroom', icon: 'bathtub', category: 'Bathroom' },
			{ label: 'Daily housekeeping', icon: 'sparkles', category: 'Services' },
			{ label: 'Swimming pool', icon: 'waves', category: 'Outdoor' },
			{ label: 'Outdoor jacuzzi', icon: 'waves', category: 'Outdoor' },
			{ label: 'Massage room (extra cost)', icon: 'sparkles', category: 'Outdoor' },
			{ label: 'Sauna', icon: 'flame', category: 'Outdoor' },
			{ label: 'Steam room', icon: 'droplets', category: 'Outdoor' },
			{ label: 'Pool table', icon: 'sparkles', category: 'Entertainment' },
			{ label: 'Darts', icon: 'sparkles', category: 'Entertainment' },
			{ label: 'Chef available (extra cost)', icon: 'utensils', category: 'Services' },
			{ label: 'Direct beach access', icon: 'waves', category: 'Outdoor' },
			{ label: 'Fully equipped kitchen', icon: 'utensils', category: 'Kitchen and dining' },
		],
		mapEmbedUrl:
			'https://www.openstreetmap.org/export/embed.html?bbox=39.540%2C-4.320%2C39.620%2C-4.250&layer=mapnik&marker=-4.280%2C39.580',
		mapLink: 'https://maps.google.com/?q=Diani+Beach+Kenya',
	},
	{
		id: 'villa-malaika-diani-5br',
		title: '5 Bedroom Villa Malaika Diani',
		location: 'Diani Beach, Kenya Coast',
		beds: 5,
		baths: 5,
		guests: 10,
		summary: '5-Bedroom All Ensuite Villa · 200m to the Beach',
		description: [
			'Located in Diani just 200 metres from the beach with direct beach access, this spacious 5-bedroom Villa Malaika is only about 10 minutes from Ukunda Airport. Every room is ensuite, with air conditioning throughout, WiFi, and smart TVs in the living areas. The master suite includes a private jacuzzi.',
			'Housekeeping is included. Outside amenities include a swimming pool and jacuzzi, plus a massage room, sauna, steam room, pool table and darts. A chef and massage services are available at an extra cost.',
		],
		filters: ['villas', 'mombasa'],
		propertyLabel: 'Entire villa',
		image: '/images/stays/villa-malaika-diani-5br/pool-1.jpg',
		images: [
			'/images/stays/villa-malaika-diani-5br/pool-1.jpg',
			'/images/stays/villa-malaika-diani-5br/exterior-1.jpg',
			'/images/stays/villa-malaika-diani-5br/exterior-2.jpg',
			'/images/stays/villa-malaika-diani-5br/living-dining-pool-1.jpg',
			'/images/stays/villa-malaika-diani-5br/living-1.jpg',
			'/images/stays/villa-malaika-diani-5br/living-media-1.jpg',
			'/images/stays/villa-malaika-diani-5br/suite-living-1.jpg',
			'/images/stays/villa-malaika-diani-5br/dining-1.jpg',
			'/images/stays/villa-malaika-diani-5br/kitchen-1.jpg',
			'/images/stays/villa-malaika-diani-5br/kitchen-2.jpg',
			'/images/stays/villa-malaika-diani-5br/dining-nook-1.jpg',
			'/images/stays/villa-malaika-diani-5br/bedroom-master-1.jpg',
			'/images/stays/villa-malaika-diani-5br/bedroom-2.jpg',
			'/images/stays/villa-malaika-diani-5br/bedroom-3.jpg',
			'/images/stays/villa-malaika-diani-5br/bedroom-5.jpg',
			'/images/stays/villa-malaika-diani-5br/bedroom-6.jpg',
			'/images/stays/villa-malaika-diani-5br/bedroom-1.jpg',
			'/images/stays/villa-malaika-diani-5br/bedroom-4.jpg',
			'/images/stays/villa-malaika-diani-5br/bedroom-7.jpg',
			'/images/stays/villa-malaika-diani-5br/bathroom-jacuzzi-1.jpg',
			'/images/stays/villa-malaika-diani-5br/bathroom-1.jpg',
		],
		sleepSpaces: [
			{
				title: 'Master bedroom',
				detail: 'Ensuite · Jacuzzi',
				image: '/images/stays/villa-malaika-diani-5br/bedroom-master-1.jpg',
			},
			{
				title: 'Bedroom 2',
				detail: 'Ensuite',
				image: '/images/stays/villa-malaika-diani-5br/bedroom-2.jpg',
			},
			{
				title: 'Bedroom 3',
				detail: 'Ensuite',
				image: '/images/stays/villa-malaika-diani-5br/bedroom-3.jpg',
			},
			{
				title: 'Bedroom 4',
				detail: 'Ensuite',
				image: '/images/stays/villa-malaika-diani-5br/bedroom-5.jpg',
			},
			{
				title: 'Bedroom 5',
				detail: 'Ensuite',
				image: '/images/stays/villa-malaika-diani-5br/bedroom-6.jpg',
			},
		],
		neighborhood: 'Diani Beach, Kenya Coast',
		neighborhoodHighlights: [
			'Diani Beach is one of Kenya’s premier coastal destinations, known for white sand, turquoise water and a relaxed beachfront lifestyle.',
			'Villa Malaika sits about 200 metres from the beach with direct beach access.',
			'Shopping centres like Baharini Plaza, Chandarana supermarket and more are about 10 minutes away.',
			'Ukunda Airport is about 10 minutes away.',
		],
		amenities: [
			{ label: 'All rooms ensuite', icon: 'bathtub', category: 'Bathroom' },
			{ label: 'WiFi available', icon: 'wifi', category: 'Internet and office' },
			{ label: 'Air conditioning in all rooms', icon: 'wind', category: 'Heating and cooling' },
			{ label: 'Smart TVs in living room', icon: 'tv', category: 'Entertainment' },
			{ label: 'Jacuzzi in master bedroom', icon: 'bathtub', category: 'Bathroom' },
			{ label: 'Housekeeping', icon: 'sparkles', category: 'Services' },
			{ label: 'Swimming pool', icon: 'waves', category: 'Outdoor' },
			{ label: 'Outdoor jacuzzi', icon: 'waves', category: 'Outdoor' },
			{ label: 'Massage room (extra cost)', icon: 'sparkles', category: 'Outdoor' },
			{ label: 'Sauna', icon: 'flame', category: 'Outdoor' },
			{ label: 'Steam room', icon: 'droplets', category: 'Outdoor' },
			{ label: 'Pool table', icon: 'sparkles', category: 'Entertainment' },
			{ label: 'Darts', icon: 'sparkles', category: 'Entertainment' },
			{ label: 'Chef available (extra cost)', icon: 'utensils', category: 'Services' },
			{ label: 'Direct beach access', icon: 'waves', category: 'Outdoor' },
			{ label: 'Fully equipped kitchen', icon: 'utensils', category: 'Kitchen and dining' },
		],
		mapEmbedUrl:
			'https://www.openstreetmap.org/export/embed.html?bbox=39.540%2C-4.320%2C39.620%2C-4.250&layer=mapnik&marker=-4.280%2C39.580',
		mapLink: 'https://maps.google.com/?q=Diani+Beach+Kenya',
	},
]

export function getStayById (id: string) {
	return STAYS.find((stay) => stay.id === id)
}

export function formatStaySpecs (stay: Stay) {
	const parts: string[] = []

	if (stay.beds) {
		parts.push(`${stay.beds} bed${stay.beds === 1 ? '' : 's'}`)
	}

	if (stay.baths) {
		parts.push(`${stay.baths} bath${stay.baths === 1 ? '' : 's'}`)
	}

	if (stay.guests) {
		parts.push(`Up to ${stay.guests} guest${stay.guests === 1 ? '' : 's'}`)
	}

	return parts.length > 0 ? parts.join(' · ') : null
}

export function formatStayPrice (stay: Stay) {
	if (!stay.pricePerNight || !stay.currency) return null

	return new Intl.NumberFormat('en-KE', {
		style: 'currency',
		currency: stay.currency,
		maximumFractionDigits: 0,
	}).format(stay.pricePerNight)
}
