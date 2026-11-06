import type { LucideIcon } from 'lucide-react'
import {
	ClipboardList,
	DollarSign,
	FileText,
	LineChart,
	PaintBucket,
	Sparkles,
	TrendingUp,
	Users,
	Wallet,
	Wrench,
} from 'lucide-react'

export interface InvestorService {
	label: string
	icon: LucideIcon
}

export interface InvestorCard {
	id: string
	title: string
	description: string
	cta: string
	services: InvestorService[]
}

export const INVESTOR_CARDS: InvestorCard[] = [
	{
		id: 'invest',
		title: 'Invest in Serviced Accommodation',
		description:
			'Grow your wealth through high-performing serviced apartments. We help investors identify, acquire and set up properties built for strong returns, then manage them end to end.',
		cta: 'Invest With Us',
		services: [
			{ label: 'Property Sourcing', icon: ClipboardList },
			{ label: 'Market Insights', icon: LineChart },
			{ label: 'Design & Setup', icon: PaintBucket },
			{ label: 'Dynamic Pricing', icon: DollarSign },
			{ label: 'Strong ROI', icon: TrendingUp },
			{ label: 'Transparent Reporting', icon: FileText },
		],
	},
	{
		id: 'partner',
		title: 'Partner With Raha Stays',
		description:
			'Already own a property? Let us turn it into a premium serviced residence. We handle furnishing, listing, guest management and housekeeping, so you earn more with zero hassle.',
		cta: 'Partner With Us',
		services: [
			{ label: 'Interior Design', icon: PaintBucket },
			{ label: 'Guest Management', icon: Users },
			{ label: 'Housekeeping', icon: Sparkles },
			{ label: 'Maintenance', icon: Wrench },
			{ label: 'Revenue Management', icon: DollarSign },
			{ label: 'Monthly Payouts', icon: Wallet },
		],
	},
]
