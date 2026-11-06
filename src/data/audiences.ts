import type { LucideIcon } from 'lucide-react'
import {
	Briefcase,
	Building2,
	Calendar,
	Globe,
	Users,
} from 'lucide-react'

export interface Audience {
	id: string
	label: string
	icon: LucideIcon
	description: string
	href: string
	learnMoreHref?: string
}

export const AUDIENCES: Audience[] = [
	{
		id: 'business',
		label: 'Business',
		icon: Briefcase,
		description:
			'For professionals who need reliable WiFi, a dedicated workspace and a restful base between meetings.',
		href: '/our-clients#business',
	},
	{
		id: 'families',
		label: 'Families',
		icon: Users,
		description:
			'Spacious, fully equipped homes where everyone has room to relax together.',
		href: '/our-clients#families',
	},
	{
		id: 'diaspora',
		label: 'Diaspora',
		icon: Globe,
		description:
			'A comfortable home base for returning visitors reconnecting with Nairobi, family and friends.',
		href: '/our-clients#diaspora',
	},
	{
		id: 'expats',
		label: 'Expats',
		icon: Building2,
		description:
			'Move-in-ready apartments that make settling into a new city simple and stress-free.',
		href: '/our-clients#expats',
	},
	{
		id: 'corporate',
		label: 'Corporate',
		icon: Briefcase,
		description:
			'Seamless accommodation for teams, relocations and executive visits.',
		href: '/our-clients#corporate',
		learnMoreHref: '/our-clients#corporate',
	},
	{
		id: 'extended',
		label: 'Extended',
		icon: Calendar,
		description:
			'Monthly stays with the comfort, space and services of a fully serviced home.',
		href: '/our-clients#extended',
	},
]
