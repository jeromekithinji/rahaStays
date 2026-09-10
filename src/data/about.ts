import type { LucideIcon } from 'lucide-react'
import {
	ClipboardList,
	DollarSign,
	Eye,
	Globe,
	Heart,
	PaintBucket,
	Sparkles,
	Target,
	TrendingUp,
	UserCog,
} from 'lucide-react'

export interface AboutValue {
	title: string
	description: string
	icon: LucideIcon
}

export const ABOUT_VALUES: AboutValue[] = [
	{
		title: 'Comfort First',
		description: 'Every detail designed for your ease',
		icon: Heart,
	},
	{
		title: 'Premium Quality',
		description: 'Curated residences in prime locations',
		icon: Target,
	},
	{
		title: 'Attention to Detail',
		description: 'Nothing is overlooked',
		icon: Eye,
	},
	{
		title: 'Global Standards',
		description: 'International hospitality, local warmth',
		icon: Globe,
	},
]

export interface AboutPillar {
	title: string
	description: string
}

export const ABOUT_PILLARS: AboutPillar[] = [
	{
		title: 'Exceptional Stays',
		description:
			'We curate and manage only the finest residences — properties that meet our exacting standards for design, comfort and location.',
	},
	{
		title: 'Effortless Hospitality',
		description:
			'From the moment you enquire to the day you check out, our team handles every detail\nso you can focus on what matters.',
	},
	{
		title: 'Trusted Partnerships',
		description:
			'We build lasting relationships with our guests, property owners and partners — grounded in transparency, reliability and care.',
	},
]

export interface AboutManagementService {
	title: string
	description: string
	icon: LucideIcon
}

export const ABOUT_MANAGEMENT_SERVICES: AboutManagementService[] = [
	{
		title: 'Property Sourcing & Acquisition',
		description:
			'We identify and evaluate high-potential properties in prime locations.',
		icon: ClipboardList,
	},
	{
		title: 'Interior Design & Furnishing',
		description:
			'Professional design and furnishing to create premium guest experiences.',
		icon: PaintBucket,
	},
	{
		title: 'Dynamic Pricing',
		description:
			'Revenue-optimised pricing strategies that maximise occupancy and returns.',
		icon: DollarSign,
	},
	{
		title: 'Guest Management',
		description:
			'End-to-end guest communication, check-in/out and support.',
		icon: UserCog,
	},
	{
		title: 'Housekeeping & Maintenance',
		description:
			'Professional cleaning and proactive property maintenance.',
		icon: Sparkles,
	},
	{
		title: 'Reporting & ROI',
		description:
			'Transparent monthly reporting with clear performance metrics.',
		icon: TrendingUp,
	},
]
