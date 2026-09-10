import { AudienceSection } from '@/components/home/audience-section'
import { ExperienceSection } from '@/components/home/experience-section'
import { Hero } from '@/components/home/hero'
import { InvestSection } from '@/components/home/invest-section'
import { LongStaySection } from '@/components/home/long-stay-section'
import { StaysSection } from '@/components/home/stays-section'

export default function Home () {
	return (
		<main>
			<Hero />
			<section id="stays" className="bg-cream">
				<StaysSection />
				<ExperienceSection />
			</section>
			<AudienceSection />
			<InvestSection />
			<LongStaySection />
		</main>
	)
}
