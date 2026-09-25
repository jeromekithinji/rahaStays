import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { StayDetail } from '@/components/stays/stay-detail'
import { getStayById, STAYS } from '@/data/stays'

interface StayPageProps {
	params: Promise<{ id: string }>
}

export function generateStaticParams () {
	return STAYS.map((stay) => ({ id: stay.id }))
}

export async function generateMetadata ({
	params,
}: StayPageProps): Promise<Metadata> {
	const { id } = await params
	const stay = getStayById(id)

	if (!stay) {
		return { title: 'Stay not found | Raha Stays' }
	}

	return {
		title: `${stay.title} | Raha Stays`,
		description:
			stay.summary ??
			`${stay.title} in ${stay.location} — a Raha Stays residence.`,
	}
}

export default async function StayPage ({ params }: StayPageProps) {
	const { id } = await params
	const stay = getStayById(id)

	if (!stay) {
		notFound()
	}

	return (
		<main className="flex-1 bg-cream">
			<StayDetail stay={stay} />
		</main>
	)
}
