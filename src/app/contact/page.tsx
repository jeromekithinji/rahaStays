import type { Metadata } from 'next'

import { ContactMethods } from '@/components/contact/contact-methods'
import { CorporateEnquiryForm } from '@/components/contact/corporate-enquiry-form'
import { GeneralEnquiryForm } from '@/components/contact/general-enquiry-form'

export const metadata: Metadata = {
	title: 'Contact | Raha Stays',
	description:
		'Get in touch with Raha Stays to book a stay, arrange concierge services, or discuss corporate accommodation.',
}

export default function ContactPage () {
	return (
		<main className="flex-1 bg-cream">
			<section className="px-5 pt-10 pb-8 lg:px-8 lg:pt-16 lg:pb-10">
				<div className="mx-auto max-w-[1280px]">
					<h1 className="font-heading text-[2.15rem] leading-tight font-medium tracking-[-0.02em] text-ink lg:text-[3rem]">
						Get in Touch
					</h1>
					<p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-muted-foreground lg:mt-5 lg:text-[1.15rem]">
						Whether you are looking to book a stay, arrange
						concierge services, or discuss corporate
						accommodation, we are here to help.
					</p>
					<div className="mt-10 lg:mt-12">
						<ContactMethods />
					</div>
				</div>
			</section>
			<section className="px-5 pb-16 lg:px-8 lg:pb-24">
				<div className="mx-auto grid max-w-[1280px] gap-14 border-t border-[#e6e3db] pt-12 lg:grid-cols-2 lg:gap-16 lg:pt-16">
					<GeneralEnquiryForm />
					<CorporateEnquiryForm />
				</div>
			</section>
		</main>
	)
}
