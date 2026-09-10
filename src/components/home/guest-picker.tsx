'use client'

import { Minus, Plus } from 'lucide-react'

export interface GuestCounts {
	adults: number
	children: number
	infants: number
}

interface GuestPickerProps {
	value: GuestCounts
	onChange: (value: GuestCounts) => void
}

const GUEST_ROWS: {
	key: keyof GuestCounts
	label: string
	description: string
	min: number
}[] = [
	{
		key: 'adults',
		label: 'Adults',
		description: 'Ages 13 or above',
		min: 0,
	},
	{
		key: 'children',
		label: 'Children',
		description: 'Ages 2–12',
		min: 0,
	},
	{
		key: 'infants',
		label: 'Infants',
		description: 'Under 2',
		min: 0,
	},
]

export function GuestPicker ({ value, onChange }: GuestPickerProps) {
	function handleAdjust (key: keyof GuestCounts, delta: number) {
		const next = Math.max(0, value[key] + delta)
		onChange({ ...value, [key]: next })
	}

	return (
		<div className="w-full min-w-[280px] rounded-3xl border border-[#ebebeb] bg-white px-5 py-2 shadow-[0_16px_40px_rgba(0,0,0,0.14)] sm:min-w-[320px]">
			{GUEST_ROWS.map((row, index) => {
				const count = value[row.key]
				const canDecrease = count > row.min

				return (
					<div
						key={row.key}
						className={[
							'flex items-center justify-between py-5',
							index < GUEST_ROWS.length - 1
								? 'border-b border-[#ebebeb]'
								: '',
						]
							.filter(Boolean)
							.join(' ')}
					>
						<div>
							<p className="text-[0.95rem] font-semibold text-ink">
								{row.label}
							</p>
							<p className="mt-0.5 text-sm text-[#717171]">
								{row.description}
							</p>
						</div>
						<div className="flex items-center gap-3">
							<button
								type="button"
								aria-label={`Decrease ${row.label}`}
								disabled={!canDecrease}
								onClick={() => handleAdjust(row.key, -1)}
								className="flex size-8 items-center justify-center rounded-full border border-[#b0b0b0] text-ink transition-colors enabled:hover:border-ink disabled:cursor-not-allowed disabled:opacity-30"
							>
								<Minus className="size-3.5" strokeWidth={2} />
							</button>
							<span className="w-5 text-center text-[0.95rem] tabular-nums text-ink">
								{count}
							</span>
							<button
								type="button"
								aria-label={`Increase ${row.label}`}
								onClick={() => handleAdjust(row.key, 1)}
								className="flex size-8 items-center justify-center rounded-full border border-[#b0b0b0] text-ink transition-colors hover:border-ink"
							>
								<Plus className="size-3.5" strokeWidth={2} />
							</button>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export function formatGuestLabel (guests: GuestCounts) {
	const total = guests.adults + guests.children

	if (total <= 0) {
		return null
	}

	return `${total} guest${total === 1 ? '' : 's'}`
}
