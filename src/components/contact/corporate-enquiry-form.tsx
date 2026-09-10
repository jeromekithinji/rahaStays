'use client'

import { useState, type FormEvent } from 'react'

import { submitCorporateEnquiry } from '@/app/contact/actions'
import {
	DateField,
	SelectField,
	TextAreaField,
	TextField,
} from '@/components/contact/form-field'
import { PREFERRED_LOCATIONS } from '@/data/contact'

export function CorporateEnquiryForm () {
	const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
	const [error, setError] = useState('')

	async function handleSubmit (event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		const form = event.currentTarget
		setStatus('loading')
		setError('')

		const result = await submitCorporateEnquiry(new FormData(form))

		if (result.ok) {
			form.reset()
			setStatus('success')
			return
		}

		setError(result.error)
		setStatus('error')
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-5">
			<h2 className="font-heading text-[1.65rem] leading-tight font-medium tracking-[-0.02em] text-ink lg:text-[2rem]">
				Corporate Accommodation Enquiry
			</h2>
			<TextField
				id="corporate-company"
				name="companyName"
				label="Company Name"
				placeholder="Company name"
				autoComplete="organization"
				required
			/>
			<TextField
				id="corporate-contact"
				name="contactPerson"
				label="Contact Person"
				placeholder="Full name"
				autoComplete="name"
				required
			/>
			<div className="grid grid-cols-2 gap-3 lg:gap-4">
				<TextField
					id="corporate-email"
					name="email"
					type="email"
					label="Email"
					placeholder="Email"
					autoComplete="email"
					required
				/>
				<TextField
					id="corporate-telephone"
					name="telephone"
					type="tel"
					label="Telephone"
					placeholder="Phone"
					autoComplete="tel"
				/>
			</div>
			<div className="grid grid-cols-2 gap-3 lg:gap-4">
				<TextField
					id="corporate-guests"
					name="guests"
					type="number"
					min={1}
					label="Number of Guests"
					placeholder=""
				/>
				<SelectField
					id="corporate-location"
					name="preferredLocation"
					label="Preferred Location"
					placeholder="Select"
					options={PREFERRED_LOCATIONS}
				/>
			</div>
			<div className="grid grid-cols-2 gap-3 lg:gap-4">
				<DateField
					id="corporate-arrival"
					name="expectedArrival"
					label="Expected Arrival"
				/>
				<TextField
					id="corporate-duration"
					name="duration"
					label="Duration"
					placeholder="e.g. 3 months"
				/>
			</div>
			<TextField
				id="corporate-apartments"
				name="apartments"
				label="Apartments Required"
				placeholder="e.g. 2x 1-bedroom"
			/>
			<TextAreaField
				id="corporate-requirements"
				name="requirements"
				label="Additional Requirements"
				placeholder="Any specific requirements..."
			/>
			<button
				type="submit"
				disabled={status === 'loading'}
				className="inline-flex h-12 items-center justify-center rounded-full bg-forest px-8 text-[0.95rem] font-medium text-gold-soft disabled:opacity-70"
			>
				{status === 'loading'
					? 'Submitting…'
					: 'Submit Corporate Enquiry'}
			</button>
			{status === 'success' ? (
				<p className="text-sm text-forest">
					Thank you — your enquiry has been sent to bookings@rahalink.com.
				</p>
			) : null}
			{status === 'error' ? (
				<p className="text-sm text-red-700">{error}</p>
			) : null}
		</form>
	)
}
