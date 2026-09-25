'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, type FormEvent } from 'react'

import { submitNewsletterSignup } from '@/app/contact/actions'

export function NewsletterCta () {
	const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
	const [error, setError] = useState('')

	async function handleSubmit (event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		const form = event.currentTarget
		setStatus('loading')
		setError('')

		const result = await submitNewsletterSignup(new FormData(form))

		if (result.ok) {
			form.reset()
			setStatus('success')
			return
		}

		setError(result.error)
		setStatus('error')
	}

	return (
		<section className="relative isolate overflow-hidden">
			<Image
				src="/images/features/concierge.jpg"
				alt=""
				fill
				className="object-cover"
				sizes="100vw"
				priority={false}
			/>
			<div
				aria-hidden="true"
				className="absolute inset-0 bg-forest-deep/70"
			/>
			<div className="relative mx-auto grid max-w-[1280px] gap-5 px-5 py-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10 lg:px-8 lg:py-9">
				<div>
					<h2 className="font-heading max-w-xl text-[1.2rem] leading-snug font-medium tracking-[-0.02em] text-white lg:text-[1.5rem]">
						Get weekly travel inspiration, exclusive offers,
						and early access to our newest homes.
					</h2>
					<p className="mt-2.5 max-w-md text-[0.8rem] leading-relaxed text-white/75">
						By submitting this form, you agree to our{' '}
						<Link
							href="#"
							className="underline underline-offset-2 transition-colors hover:text-white"
						>
							Terms
						</Link>{' '}
						and{' '}
						<Link
							href="#"
							className="underline underline-offset-2 transition-colors hover:text-white"
						>
							Privacy Policy
						</Link>
						.
					</p>
				</div>
				<div>
					{status === 'success' ? (
						<p className="text-[1.05rem] text-gold-soft">
							Thank you — you are on the list.
						</p>
					) : (
						<form
							onSubmit={handleSubmit}
							className="flex flex-col gap-4 sm:flex-row sm:items-end"
						>
							<label className="min-w-0 flex-1">
								<span className="sr-only">Email address</span>
								<input
									type="email"
									name="email"
									required
									autoComplete="email"
									placeholder="Enter your email address"
									className="h-10 w-full border-0 border-b border-white/70 bg-transparent px-0 text-sm text-white outline-none placeholder:text-white/55 focus:border-gold-soft"
								/>
							</label>
							<button
								type="submit"
								disabled={status === 'loading'}
								className="inline-flex h-10 shrink-0 items-center justify-center bg-ink px-6 text-sm font-medium text-white transition-colors hover:bg-ink/90 disabled:opacity-70 sm:min-w-[7.5rem]"
							>
								{status === 'loading'
									? 'Sending…'
									: 'Subscribe'}
							</button>
						</form>
					)}
					{status === 'error' ? (
						<p className="mt-3 text-sm text-red-200">{error}</p>
					) : null}
				</div>
			</div>
		</section>
	)
}
