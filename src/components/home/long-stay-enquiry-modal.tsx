'use client'

import {
	useEffect,
	useId,
	useState,
	type FormEvent,
	type ReactNode,
} from 'react'
import { X } from 'lucide-react'

import { submitLongStayEnquiry } from '@/app/contact/actions'

const fieldClassName =
	'h-11 w-full rounded-md border border-[#e6e3db] bg-white px-3 text-[0.95rem] text-ink outline-none placeholder:text-[#9a9790] focus:border-forest'

const LENGTH_OPTIONS = [
	{ value: '2-weeks', label: '2 weeks' },
	{ value: '1-month', label: '1 month' },
	{ value: '2-3-months', label: '2–3 months' },
	{ value: '3-plus-months', label: '3+ months' },
] as const

interface LongStayEnquiryModalProps {
	open: boolean
	onOpenChange: (open: boolean) => void
}

function FieldLabel ({
	htmlFor,
	children,
	required,
}: {
	htmlFor?: string
	children: ReactNode
	required?: boolean
}) {
	return (
		<label
			htmlFor={htmlFor}
			className="mb-1.5 block text-sm font-medium text-ink"
		>
			{children}
			{required ? (
				<span className="text-forest" aria-hidden="true">
					{' '}
					*
				</span>
			) : null}
		</label>
	)
}

export function LongStayEnquiryModal ({
	open,
	onOpenChange,
}: LongStayEnquiryModalProps) {
	const titleId = useId()
	const [status, setStatus] = useState<
		'idle' | 'loading' | 'success' | 'error'
	>('idle')
	const [error, setError] = useState('')
	const [bookingType, setBookingType] = useState('')

	useEffect(() => {
		if (!open) return

		function handleKeyDown (event: KeyboardEvent) {
			if (event.key === 'Escape') {
				onOpenChange(false)
			}
		}

		document.body.style.overflow = 'hidden'
		window.addEventListener('keydown', handleKeyDown)

		return () => {
			document.body.style.overflow = ''
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [open, onOpenChange])

	useEffect(() => {
		if (!open) {
			setStatus('idle')
			setError('')
			setBookingType('')
		}
	}, [open])

	async function handleSubmit (event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		const form = event.currentTarget

		setStatus('loading')
		setError('')

		const result = await submitLongStayEnquiry(new FormData(form))

		if (result.ok) {
			form.reset()
			setBookingType('')
			setStatus('success')
			return
		}

		setError(result.error)
		setStatus('error')
	}

	if (!open) return null

	return (
		<div className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6">
			<button
				type="button"
				aria-label="Close long-stay form"
				className="absolute inset-0 bg-forest/45 backdrop-blur-[2px]"
				onClick={() => onOpenChange(false)}
			/>
			<div
				role="dialog"
				aria-modal="true"
				aria-labelledby={titleId}
				className="relative z-10 flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl bg-cream shadow-2xl sm:rounded-3xl"
			>
				<div className="flex items-start justify-between gap-4 border-b border-[#e6e3db] px-5 py-4 sm:px-7 sm:py-5">
					<div>
						<p className="text-sm font-medium text-forest/70">
							Long stays
						</p>
						<h2
							id={titleId}
							className="font-heading mt-1 text-[1.35rem] leading-tight font-medium tracking-[-0.02em] text-ink sm:text-[1.6rem]"
						>
							Request a long-stay rate
						</h2>
					</div>
					<button
						type="button"
						onClick={() => onOpenChange(false)}
						className="flex size-9 shrink-0 items-center justify-center rounded-full text-ink/70 transition-colors hover:bg-[#efece4] hover:text-ink"
						aria-label="Close"
					>
						<X className="size-5" strokeWidth={1.75} />
					</button>
				</div>

				{status === 'success' ? (
					<div className="overflow-y-auto px-5 py-8 sm:px-7">
						<p className="text-[1.05rem] leading-relaxed text-ink">
							Thank you. We have received your long-stay
							request and will be in touch with personalised
							rates shortly.
						</p>
						<button
							type="button"
							onClick={() => onOpenChange(false)}
							className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-forest px-8 text-[0.95rem] font-medium text-gold-soft"
						>
							Close
						</button>
					</div>
				) : (
					<form
						onSubmit={handleSubmit}
						className="flex min-h-0 flex-1 flex-col"
					>
						<div className="space-y-5 overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">
							<fieldset>
								<legend className="mb-2.5 text-sm font-medium text-ink">
									Booking type
									<span className="text-forest"> *</span>
								</legend>
								<div className="flex flex-wrap gap-5">
									<label className="flex items-center gap-2 text-[0.95rem] text-ink">
										<input
											type="radio"
											name="bookingType"
											value="individual"
											required
											checked={bookingType === 'individual'}
											onChange={() =>
												setBookingType('individual')
											}
											className="size-4 accent-forest"
										/>
										Individual
									</label>
									<label className="flex items-center gap-2 text-[0.95rem] text-ink">
										<input
											type="radio"
											name="bookingType"
											value="corporate"
											required
											checked={bookingType === 'corporate'}
											onChange={() =>
												setBookingType('corporate')
											}
											className="size-4 accent-forest"
										/>
										Corporate
									</label>
								</div>
							</fieldset>

							<div>
								<FieldLabel htmlFor="ls-name" required>
									Full name
								</FieldLabel>
								<input
									id="ls-name"
									name="fullName"
									required
									autoComplete="name"
									className={fieldClassName}
									placeholder="Your full name"
								/>
							</div>

							{bookingType === 'corporate' ? (
								<div>
									<FieldLabel htmlFor="ls-company" required>
										Company name
									</FieldLabel>
									<input
										id="ls-company"
										name="companyName"
										required
										autoComplete="organization"
										className={fieldClassName}
										placeholder="Company name"
									/>
								</div>
							) : null}

							<div>
								<FieldLabel htmlFor="ls-email" required>
									Email
								</FieldLabel>
								<input
									id="ls-email"
									name="email"
									type="email"
									required
									autoComplete="email"
									className={fieldClassName}
									placeholder="your@email.com"
								/>
							</div>

							<div>
								<FieldLabel htmlFor="ls-phone">
									Phone / WhatsApp
								</FieldLabel>
								<input
									id="ls-phone"
									name="phone"
									type="tel"
									autoComplete="tel"
									className={fieldClassName}
									placeholder="+254..."
								/>
							</div>

							<div>
								<FieldLabel htmlFor="ls-length" required>
									Length of stay
								</FieldLabel>
								<select
									id="ls-length"
									name="lengthOfStay"
									required
									defaultValue=""
									className={fieldClassName}
								>
									<option value="" disabled>
										Select length of stay
									</option>
									{LENGTH_OPTIONS.map((option) => (
										<option
											key={option.value}
											value={option.value}
										>
											{option.label}
										</option>
									))}
								</select>
							</div>

							<div>
								<FieldLabel htmlFor="ls-message">
									Message
								</FieldLabel>
								<textarea
									id="ls-message"
									name="message"
									rows={4}
									className="min-h-[6rem] w-full resize-y rounded-md border border-[#e6e3db] bg-white px-3 py-2.5 text-[0.95rem] text-ink outline-none placeholder:text-[#9a9790] focus:border-forest"
									placeholder="Tell us about your stay"
								/>
							</div>

							{status === 'error' ? (
								<p className="text-sm text-red-700">{error}</p>
							) : null}
						</div>

						<div className="border-t border-[#e6e3db] bg-cream px-5 py-4 sm:px-7">
							<button
								type="submit"
								disabled={status === 'loading'}
								className="inline-flex h-12 w-full cursor-pointer items-center justify-center rounded-full bg-forest px-8 text-[0.95rem] font-medium text-gold-soft transition-colors hover:bg-forest-deep disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
							>
								{status === 'loading'
									? 'Sending…'
									: 'Request rate'}
							</button>
						</div>
					</form>
				)}
			</div>
		</div>
	)
}
