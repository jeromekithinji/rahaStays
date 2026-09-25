'use client'

import { useState, type FormEvent } from 'react'

interface StayBookingCardProps {
	title: string
	guests?: number
	pricePerNight?: number
	currency?: string
}

function formatPrice (pricePerNight?: number, currency?: string) {
	if (!pricePerNight || !currency) return null

	return new Intl.NumberFormat('en-KE', {
		style: 'currency',
		currency,
		maximumFractionDigits: 0,
	}).format(pricePerNight)
}

export function StayBookingCard ({
	title,
	guests,
	pricePerNight,
	currency,
}: StayBookingCardProps) {
	const [status, setStatus] = useState<'idle' | 'sent'>('idle')
	const price = formatPrice(pricePerNight, currency)

	function handleSubmit (event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
		const checkIn = String(formData.get('checkIn') ?? '')
		const checkOut = String(formData.get('checkOut') ?? '')
		const guestCount = String(formData.get('guests') ?? '')

		const message = [
			`Hello Raha Stays, I'd like to enquire about ${title}.`,
			checkIn ? `Check-in: ${checkIn}` : null,
			checkOut ? `Check-out: ${checkOut}` : null,
			guestCount ? `Guests: ${guestCount}` : null,
		]
			.filter(Boolean)
			.join('\n')

		window.open(
			`https://wa.me/254759285059?text=${encodeURIComponent(message)}`,
			'_blank',
			'noopener,noreferrer',
		)
		setStatus('sent')
	}

	return (
		<aside className="rounded-2xl border border-[#e6e3db] bg-white p-5 shadow-[0_8px_28px_rgba(27,48,34,0.08)] lg:sticky lg:top-28 lg:p-6">
			{price ? (
				<p className="text-[1.15rem] text-ink">
					<span className="font-semibold">{price}</span>
					<span className="text-muted-foreground"> night</span>
				</p>
			) : (
				<p className="text-[1.05rem] font-semibold text-ink">
					Request a quote
				</p>
			)}
			<form onSubmit={handleSubmit} className="mt-4 space-y-3">
				<div className="overflow-hidden rounded-xl border border-[#e6e3db]">
					<div className="grid grid-cols-2 border-b border-[#e6e3db]">
						<label className="border-r border-[#e6e3db] px-3 py-2.5">
							<span className="block text-[0.7rem] font-semibold tracking-wide text-ink uppercase">
								Check-in
							</span>
							<input
								type="date"
								name="checkIn"
								required
								className="mt-1 w-full bg-transparent text-sm text-ink outline-none"
							/>
						</label>
						<label className="px-3 py-2.5">
							<span className="block text-[0.7rem] font-semibold tracking-wide text-ink uppercase">
								Checkout
							</span>
							<input
								type="date"
								name="checkOut"
								required
								className="mt-1 w-full bg-transparent text-sm text-ink outline-none"
							/>
						</label>
					</div>
					<label className="block px-3 py-2.5">
						<span className="block text-[0.7rem] font-semibold tracking-wide text-ink uppercase">
							Guests
						</span>
						<input
							type="number"
							name="guests"
							min={1}
							max={guests ?? 12}
							defaultValue={1}
							required
							className="mt-1 w-full bg-transparent text-sm text-ink outline-none"
						/>
					</label>
				</div>
				<button
					type="submit"
					className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-forest text-[0.95rem] font-medium text-gold-soft"
				>
					Inquire
				</button>
			</form>
			{status === 'sent' ? (
				<p className="mt-3 text-center text-sm text-muted-foreground">
					Opening WhatsApp to continue…
				</p>
			) : null}
		</aside>
	)
}
