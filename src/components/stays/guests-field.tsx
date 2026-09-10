'use client'

import { ChangeEvent } from 'react'

interface GuestsFieldProps {
	id: string
	label: string
	name: string
	value: string
	onChange: (value: string) => void
}

export function GuestsField ({
	id,
	label,
	name,
	value,
	onChange,
}: GuestsFieldProps) {
	function handleChange (event: ChangeEvent<HTMLInputElement>) {
		const next = event.target.value

		if (next === '') {
			onChange('')
			return
		}

		if (!/^\d+$/.test(next)) {
			return
		}

		onChange(next)
	}

	return (
		<label className="block min-w-0" htmlFor={id}>
			<span className="mb-1.5 block text-sm text-muted-foreground">
				{label}
			</span>
			<input
				id={id}
				name={name}
				type="number"
				inputMode="numeric"
				min={1}
				step={1}
				value={value}
				onChange={handleChange}
				placeholder="e.g. 2"
				className="h-11 w-full rounded-md border border-[#e6e3db] bg-white px-3 text-[0.95rem] text-ink outline-none placeholder:text-[#8a8a86] focus:border-forest"
			/>
		</label>
	)
}
