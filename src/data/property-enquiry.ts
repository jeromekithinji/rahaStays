export interface EnquiryOption {
	value: string
	label: string
}

export const OWNER_ROLES: EnquiryOption[] = [
	{ value: 'owner', label: 'Owner' },
	{ value: 'investor', label: 'Investor' },
	{ value: 'representative', label: 'Representative' },
]

export const SUPPORT_OPTIONS: EnquiryOption[] = [
	{ value: 'source-property', label: 'Source a property' },
	{
		value: 'interior-design',
		label: 'Interior design and furnishing',
	},
	{ value: 'list-and-price', label: 'List and price my property' },
	{
		value: 'full-management',
		label: 'Full guest and property management',
	},
	{
		value: 'improve-existing',
		label: 'Improve an existing serviced apartment',
	},
	{ value: 'not-sure', label: 'Not sure yet' },
]

export const HAS_PROPERTY_OPTIONS: EnquiryOption[] = [
	{ value: 'yes', label: 'Yes' },
	{
		value: 'buying-leasing',
		label: 'In the process of buying or leasing',
	},
	{ value: 'no', label: 'No' },
]

export const PROPERTY_TYPES: EnquiryOption[] = [
	{ value: 'apartment', label: 'Apartment' },
	{ value: 'villa', label: 'Villa' },
	{ value: 'house', label: 'House' },
	{ value: 'other', label: 'Other' },
]

export const PROPERTY_STATUS_OPTIONS: EnquiryOption[] = [
	{ value: 'unfurnished', label: 'Unfurnished' },
	{ value: 'partly-furnished', label: 'Partly furnished' },
	{ value: 'guest-ready', label: 'Guest ready' },
	{ value: 'already-operating', label: 'Already operating' },
]

export const TIMELINE_OPTIONS: EnquiryOption[] = [
	{ value: 'immediately', label: 'Immediately' },
	{ value: '1-3-months', label: 'Within 1–3 months' },
	{ value: '3-6-months', label: 'Within 3–6 months' },
	{ value: 'exploring', label: 'Exploring options' },
]

export const BUDGET_RANGES: EnquiryOption[] = [
	{ value: 'under-10k', label: 'Under $10,000' },
	{ value: '10k-25k', label: '$10,000 – $25,000' },
	{ value: '25k-50k', label: '$25,000 – $50,000' },
	{ value: '50k-100k', label: '$50,000 – $100,000' },
	{ value: '100k-plus', label: '$100,000+' },
	{ value: 'prefer-not', label: 'Prefer not to say' },
]

export const CONTACT_METHODS: EnquiryOption[] = [
	{ value: 'whatsapp', label: 'WhatsApp' },
	{ value: 'phone', label: 'Phone' },
	{ value: 'email', label: 'Email' },
]

export const PROPERTY_ENQUIRY_SUCCESS =
	'Thank you for your interest in partnering with Raha Stays. Our team will contact you to discuss your property and the services that fit your goals.'
