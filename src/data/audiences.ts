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
	description: string
	learnMoreHref?: string
}

export const AUDIENCES: Audience[] = [
	{
		label: 'Business',
		icon: Briefcase,
		description:
			'For professionals who need reliable WiFi, a dedicated workspace and a restful base between meetings.',
	},
	{
		label: 'Families',
		icon: Users,
		description:
			'Spacious, fully equipped homes where everyone has room to relax together.',
	},
	{
		label: 'Diaspora',
		icon: Globe,
		description:
			'A comfortable home base for returning visitors reconnecting with Nairobi, family and friends.',
	},
	{
		label: 'Expats',
		icon: Building2,
		description:
			'Move-in-ready apartments that make settling into a new city simple and stress-free.',
	},
	{
		label: 'Corporate',
		icon: Briefcase,
		description:
			'Seamless accommodation for teams, relocations and executive visits.',
		learnMoreHref: '/contact#corporate-enquiry',
	},
	{
		label: 'Extended',
		icon: Calendar,
		description:
			'Monthly stays with the comfort, space and services of a fully serviced home.',
	},
]
