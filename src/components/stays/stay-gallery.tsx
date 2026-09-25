'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Grid2x2, X } from 'lucide-react'

interface StayGalleryProps {
	title: string
	images: string[]
}

export function StayGallery ({ title, images }: StayGalleryProps) {
	const [isOpen, setIsOpen] = useState(false)
	const [hero, ...rest] = images
	const sideImages = rest.slice(0, 4)

	if (!hero) return null

	return (
		<>
			<div className="relative grid gap-2 overflow-hidden rounded-2xl lg:grid-cols-2 lg:gap-2">
				<button
					type="button"
					onClick={() => setIsOpen(true)}
					className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[420px]"
				>
					<Image
						src={hero}
						alt={`${title} — main photo`}
						fill
						className="object-cover transition-transform duration-500 hover:scale-[1.02]"
						sizes="(min-width: 1024px) 50vw, 100vw"
						priority
					/>
				</button>
				<div className="hidden grid-cols-2 gap-2 lg:grid">
					{sideImages.map((image, index) => (
						<button
							key={`${image}-${index}`}
							type="button"
							onClick={() => setIsOpen(true)}
							className="relative aspect-square overflow-hidden"
						>
							<Image
								src={image}
								alt={`${title} — photo ${index + 2}`}
								fill
								className="object-cover transition-transform duration-500 hover:scale-[1.02]"
								sizes="25vw"
							/>
						</button>
					))}
				</div>
				<button
					type="button"
					onClick={() => setIsOpen(true)}
					className="absolute right-4 bottom-4 inline-flex items-center gap-2 rounded-xl border border-ink/15 bg-white px-3.5 py-2 text-sm font-medium text-ink shadow-sm"
				>
					<Grid2x2 className="size-4" strokeWidth={1.75} />
					Show all photos
				</button>
			</div>

			{isOpen ? (
				<div className="fixed inset-0 z-50 flex flex-col bg-cream">
					<div className="flex items-center justify-between border-b border-[#e6e3db] px-5 py-4 lg:px-8">
						<p className="text-sm font-medium text-ink">
							{title}
						</p>
						<button
							type="button"
							onClick={() => setIsOpen(false)}
							className="flex size-9 items-center justify-center rounded-full hover:bg-[#efece4]"
							aria-label="Close photos"
						>
							<X className="size-5" strokeWidth={1.75} />
						</button>
					</div>
					<div className="overflow-y-auto px-5 py-6 lg:px-8">
						<ul className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2">
							{images.map((image, index) => (
								<li
									key={`${image}-modal-${index}`}
									className="relative aspect-[4/3] overflow-hidden rounded-2xl"
								>
									<Image
										src={image}
										alt={`${title} — photo ${index + 1}`}
										fill
										className="object-cover"
										sizes="(min-width: 640px) 50vw, 100vw"
									/>
								</li>
							))}
						</ul>
					</div>
				</div>
			) : null}
		</>
	)
}
