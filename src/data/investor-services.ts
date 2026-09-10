import type { LucideIcon } from 'lucide-react'
import {
	ClipboardList,
	DollarSign,
	PaintBucket,
	Sparkles,
	TrendingUp,
	Users,
} from 'lucide-react'

export interface InvestorService {
	label: string
	icon: LucideIcon
}

export const INVESTOR_SERVICES: InvestorService[] = [
	{ label: 'Property Sourcing', icon: ClipboardList },
	{ label: 'Design & Setup', icon: PaintBucket },
	{ label: 'Dynamic Pricing', icon: DollarSign },
	{ label: 'Guest Management', icon: Users },
	{ label: 'Housekeeping', icon: Sparkles },
	{ label: 'Strong ROI', icon: TrendingUp },
]
