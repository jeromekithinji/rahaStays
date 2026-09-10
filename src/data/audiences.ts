import type { LucideIcon } from 'lucide-react'
import {
	Briefcase,
	Building2,
	Calendar,
	Globe,
	Users,
} from 'lucide-react'

export interface Audience {
	label: string
	icon: LucideIcon
}

export const AUDIENCES: Audience[] = [
	{ label: 'Business', icon: Briefcase },
	{ label: 'Families', icon: Users },
	{ label: 'Diaspora', icon: Globe },
	{ label: 'Expats', icon: Building2 },
	{ label: 'Corporate', icon: Briefcase },
	{ label: 'Extended', icon: Calendar },
]
