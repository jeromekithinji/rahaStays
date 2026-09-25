'use client'

import {
	useEffect,
	useId,
	useState,
	type FormEvent,
	type ReactNode,
} from 'react'
import { X } from 'lucide-react'

import { submitPropertyEnquiry } from '@/app/contact/actions'
import {
	BUDGET_RANGES,
	CONTACT_METHODS,
	HAS_PROPERTY_OPTIONS,
	OWNER_ROLES,
	PROPERTY_ENQUIRY_SUCCESS,
	PROPERTY_STATUS_OPTIONS,
	PROPERTY_TYPES,
	SUPPORT_OPTIONS,
	TIMELINE_OPTIONS,
} from '@/data/property-enquiry'

const fieldClassName =
	'h-11 w-full rounded-md border border-[#e6e3db] bg-white px-3 text-[0.95rem] text-ink outline-none placeholder:text-[#9a9790] focus:border-forest'

interface PropertyEnquiryModalProps {
	open: boolean
	onOpenChange: (open: boolean) => void
}

function SectionHeading ({ children }: { children: ReactNode }) {
	return (
		<h3 className="font-heading text-[1.15rem] font-medium text-ink">
			{children}
		</h3>
	)
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

export function PropertyEnquiryModal ({
	open,
	onOpenChange,
}: PropertyEnquiryModalProps) {
	const titleId = useId()
	const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
	const [error, setError] = useState('')
	const [hasProperty, setHasProperty] = useState('')
	const [support, setSupport] = useState<string[]>([])
	const [propertyStatus, setPropertyStatus] = useState('')

	const showBudget =
		support.includes('source-property') ||
		support.includes('interior-design') ||
		propertyStatus === 'unfurnished' ||
		propertyStatus === 'partly-furnished' ||
		hasProperty === 'no' ||
		hasProperty === 'buying-leasing'

	const showRentalIncome = hasProperty === 'yes'

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
			setHasProperty('')
			setSupport([])
			setPropertyStatus('')
		}
	}, [open])

	function handleSupportChange (value: string, checked: boolean) {
		setSupport((current) =>
			checked
				? [...current, value]
				: current.filter((item) => item !== value),
		)
	}

	async function handleSubmit (event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		const form = event.currentTarget

		if (support.length === 0) {
			setStatus('error')
			setError('Please select at least one support option.')
			return
		}

		setStatus('loading')
		setError('')

		const result = await submitPropertyEnquiry(new FormData(form))

		if (result.ok) {
			form.reset()
			setHasProperty('')
			setSupport([])
			setPropertyStatus('')
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
				aria-label="Close enquiry form"
				className="absolute inset-0 bg-forest/45 backdrop-blur-[2px]"
				onClick={() => onOpenChange(false)}
			/>
			<div
				role="dialog"
				aria-modal="true"
				aria-labelledby={titleId}
				className="relative z-10 flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl bg-cream shadow-2xl sm:rounded-3xl"
			>
				<div className="flex items-start justify-between gap-4 border-b border-[#e6e3db] px-5 py-4 sm:px-7 sm:py-5">
					<div>
						<p className="text-sm font-medium text-forest/70">
							Property Management
						</p>
						<h2
							id={titleId}
							className="font-heading mt-1 text-[1.35rem] leading-tight font-medium tracking-[-0.02em] text-ink sm:text-[1.6rem]"
						>
							Raha Stays Property Management Enquiry
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
							{PROPERTY_ENQUIRY_SUCCESS}
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
						<div className="space-y-8 overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">
							<section className="space-y-4">
								<SectionHeading>1. Your details</SectionHeading>
								<div>
									<FieldLabel htmlFor="pm-name" required>
										Full name
									</FieldLabel>
									<input
										id="pm-name"
										name="fullName"
										required
										autoComplete="name"
										className={fieldClassName}
										placeholder="Your full name"
									/>
								</div>
								<div className="grid gap-4 sm:grid-cols-2">
									<div>
										<FieldLabel htmlFor="pm-email" required>
											Email address
										</FieldLabel>
										<input
											id="pm-email"
											name="email"
											type="email"
											required
											autoComplete="email"
											className={fieldClassName}
											placeholder="your@email.com"
										/>
									</div>
									<div>
										<FieldLabel htmlFor="pm-phone" required>
											Phone / WhatsApp number
										</FieldLabel>
										<input
											id="pm-phone"
											name="phone"
											type="tel"
											required
											autoComplete="tel"
											className={fieldClassName}
											placeholder="+254..."
										/>
									</div>
								</div>
								<div>
									<FieldLabel htmlFor="pm-based">
										Where are you based?
									</FieldLabel>
									<input
										id="pm-based"
										name="basedIn"
										className={fieldClassName}
										placeholder="City and country"
									/>
								</div>
								<div>
									<FieldLabel htmlFor="pm-role">
										Are you the property owner or acting for
										an investor?
									</FieldLabel>
									<select
										id="pm-role"
										name="ownerRole"
										defaultValue=""
										className={fieldClassName}
									>
										<option value="" disabled>
											Select
										</option>
										{OWNER_ROLES.map((option) => (
											<option
												key={option.value}
												value={option.value}
											>
												{option.label}
											</option>
										))}
									</select>
								</div>
							</section>

							<section className="space-y-4">
								<SectionHeading>
									2. Your property plans
								</SectionHeading>
								<fieldset>
									<legend className="mb-2 text-sm font-medium text-ink">
										What support are you looking for?
										<span className="text-forest"> *</span>
									</legend>
									<p className="mb-3 text-sm text-muted-foreground">
										Select all that apply
									</p>
									<ul className="space-y-2.5">
										{SUPPORT_OPTIONS.map((option) => (
											<li key={option.value}>
												<label className="flex items-start gap-2.5 text-[0.95rem] text-ink">
													<input
														type="checkbox"
														name="support"
														value={option.value}
														checked={support.includes(
															option.value,
														)}
														onChange={(event) =>
															handleSupportChange(
																option.value,
																event.target.checked,
															)
														}
														className="mt-1 size-4 accent-forest"
													/>
													<span>{option.label}</span>
												</label>
											</li>
										))}
									</ul>
								</fieldset>
								<div>
									<FieldLabel htmlFor="pm-has-property">
										Do you already have a property?
									</FieldLabel>
									<select
										id="pm-has-property"
										name="hasProperty"
										value={hasProperty}
										onChange={(event) =>
											setHasProperty(event.target.value)
										}
										className={fieldClassName}
									>
										<option value="" disabled>
											Select
										</option>
										{HAS_PROPERTY_OPTIONS.map((option) => (
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
									<FieldLabel htmlFor="pm-location" required>
										Preferred or current property location
									</FieldLabel>
									<input
										id="pm-location"
										name="location"
										required
										className={fieldClassName}
										placeholder="City, neighbourhood and building, if known"
									/>
								</div>
								<div className="grid gap-4 sm:grid-cols-2">
									<div>
										<FieldLabel htmlFor="pm-type">
											Property type
										</FieldLabel>
										<select
											id="pm-type"
											name="propertyType"
											defaultValue=""
											className={fieldClassName}
										>
											<option value="" disabled>
												Select
											</option>
											{PROPERTY_TYPES.map((option) => (
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
										<FieldLabel htmlFor="pm-bedrooms">
											Number of bedrooms or units
										</FieldLabel>
										<input
											id="pm-bedrooms"
											name="bedrooms"
											className={fieldClassName}
											placeholder="e.g. 2"
										/>
									</div>
								</div>
								<div>
									<FieldLabel htmlFor="pm-status" required>
										Current status
									</FieldLabel>
									<select
										id="pm-status"
										name="propertyStatus"
										required
										value={propertyStatus}
										onChange={(event) =>
											setPropertyStatus(event.target.value)
										}
										className={fieldClassName}
									>
										<option value="" disabled>
											Select
										</option>
										{PROPERTY_STATUS_OPTIONS.map((option) => (
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
									<FieldLabel htmlFor="pm-timeline" required>
										When would you like to get started?
									</FieldLabel>
									<select
										id="pm-timeline"
										name="timeline"
										required
										defaultValue=""
										className={fieldClassName}
									>
										<option value="" disabled>
											Select
										</option>
										{TIMELINE_OPTIONS.map((option) => (
											<option
												key={option.value}
												value={option.value}
											>
												{option.label}
											</option>
										))}
									</select>
								</div>
							</section>

							<section className="space-y-4">
								<SectionHeading>3. Your goals</SectionHeading>
								<div>
									<FieldLabel htmlFor="pm-goals">
										What would you like Raha Stays to help
										you achieve?
									</FieldLabel>
									<textarea
										id="pm-goals"
										name="goals"
										rows={4}
										className="min-h-[6.5rem] w-full resize-y rounded-md border border-[#e6e3db] bg-white px-3 py-2.5 text-[0.95rem] text-ink outline-none placeholder:text-[#9a9790] focus:border-forest"
										placeholder="Optional"
									/>
								</div>
								{showBudget ? (
									<div>
										<FieldLabel htmlFor="pm-budget">
											Estimated investment or furnishing
											budget
										</FieldLabel>
										<select
											id="pm-budget"
											name="budget"
											defaultValue=""
											className={fieldClassName}
										>
											<option value="" disabled>
												Select a range
											</option>
											{BUDGET_RANGES.map((option) => (
												<option
													key={option.value}
													value={option.value}
												>
													{option.label}
												</option>
											))}
										</select>
									</div>
								) : null}
								{showRentalIncome ? (
									<div>
										<FieldLabel htmlFor="pm-rental">
											Is the property currently earning
											rental income?
										</FieldLabel>
										<select
											id="pm-rental"
											name="rentalIncome"
											defaultValue=""
											className={fieldClassName}
										>
											<option value="" disabled>
												Select
											</option>
											<option value="Yes">Yes</option>
											<option value="No">No</option>
										</select>
									</div>
								) : null}
								<div className="grid gap-4 sm:grid-cols-2">
									<div>
										<FieldLabel htmlFor="pm-contact-method">
											Best way to contact you
										</FieldLabel>
										<select
											id="pm-contact-method"
											name="contactMethod"
											defaultValue=""
											className={fieldClassName}
										>
											<option value="" disabled>
												Select
											</option>
											{CONTACT_METHODS.map((option) => (
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
										<FieldLabel htmlFor="pm-preferred-time">
											Preferred time
										</FieldLabel>
										<input
											id="pm-preferred-time"
											name="preferredTime"
											className={fieldClassName}
											placeholder="e.g. Weekday mornings"
										/>
									</div>
								</div>
							</section>

							<section>
								<SectionHeading>4. Consent</SectionHeading>
								<label className="mt-3 flex items-start gap-2.5 text-[0.95rem] leading-snug text-ink">
									<input
										type="checkbox"
										name="consent"
										value="yes"
										required
										className="mt-1 size-4 accent-forest"
									/>
									<span>
										I agree that Raha Stays may contact me
										about my property management enquiry.
										<span className="text-forest"> *</span>
									</span>
								</label>
							</section>

							{status === 'error' ? (
								<p className="text-sm text-red-700">{error}</p>
							) : null}
						</div>

						<div className="border-t border-[#e6e3db] bg-cream px-5 py-4 sm:px-7">
							<button
								type="submit"
								disabled={status === 'loading'}
								className="inline-flex h-12 w-full items-center justify-center rounded-full bg-forest px-8 text-[0.95rem] font-medium text-gold-soft disabled:opacity-70 sm:w-auto"
							>
								{status === 'loading'
									? 'Sending…'
									: 'Submit enquiry'}
							</button>
						</div>
					</form>
				)}
			</div>
		</div>
	)
}
