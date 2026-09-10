'use client'

import { useState, type FormEvent } from 'react'

import { submitGeneralEnquiry } from '@/app/contact/actions'
import {
	SelectField,
	TextAreaField,
	TextField,
} from '@/components/contact/form-field'
import { ENQUIRY_SUBJECTS } from '@/data/contact'

export function GeneralEnquiryForm () {
	const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
	const [error, setError] = useState('')

	async function handleSubmit (event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		const form = event.currentTarget
		setStatus('loading')
		setError('')

		const result = await submitGeneralEnquiry(new FormData(form))

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
				General Enquiry
			</h2>
			<TextField
				id="general-name"
				name="fullName"
				label="Full Name"
				placeholder="Your full name"
				autoComplete="name"
				required
			/>
			<TextField
				id="general-email"
				name="email"
				type="email"
				label="Email"
				placeholder="your@email.com"
				autoComplete="email"
				required
			/>
			<TextField
				id="general-phone"
				name="phone"
				type="tel"
				label="Phone / WhatsApp"
				placeholder="+254..."
				autoComplete="tel"
			/>
			<SelectField
				id="general-subject"
				name="subject"
				label="Subject"
				placeholder="Select a subject"
				options={ENQUIRY_SUBJECTS}
				required
			/>
			<TextAreaField
				id="general-message"
				name="message"
				label="Message"
				placeholder="How can we help you?"
				required
			/>
			<button
				type="submit"
				disabled={status === 'loading'}
				className="inline-flex h-12 items-center justify-center rounded-full bg-forest px-8 text-[0.95rem] font-medium text-gold-soft disabled:opacity-70"
			>
				{status === 'loading' ? 'Sending…' : 'Send Message'}
			</button>
			{status === 'success' ? (
				<p className="text-sm text-forest">
					Thank you — your message has been sent to bookings@rahalink.com.
				</p>
			) : null}
			{status === 'error' ? (
				<p className="text-sm text-red-700">{error}</p>
			) : null}
		</form>
	)
}
