'use client'

import {
	useEffect,
	useEffectEvent,
	useId,
	useRef,
	useState,
} from 'react'
import { Check, ChevronDown } from 'lucide-react'

interface FilterOption {
	value: string
	label: string
}

interface FilterFieldProps {
	id: string
	label: string
	name: string
	value: string[]
	options: FilterOption[]
	placeholder: string
	onChange: (value: string[]) => void
}

export function FilterField ({
	id,
	label,
	name,
	value,
	options,
	placeholder,
	onChange,
}: FilterFieldProps) {
	const listId = useId()
	const rootRef = useRef<HTMLDivElement>(null)
	const [isOpen, setIsOpen] = useState(false)

	const selectedLabels = options
		.filter((option) => value.includes(option.value))
		.map((option) => option.label)

	const displayLabel =
		selectedLabels.length === 0
			? placeholder
			: selectedLabels.length <= 2
				? selectedLabels.join(', ')
				: `${selectedLabels.length} selected`

	const handleDocumentPointerDown = useEffectEvent((event: Event) => {
		const target = event.target as Node | null

		if (!target || !rootRef.current?.contains(target)) {
			setIsOpen(false)
		}
	})

	useEffect(() => {
		document.addEventListener('pointerdown', handleDocumentPointerDown)

		return () => {
			document.removeEventListener(
				'pointerdown',
				handleDocumentPointerDown,
			)
		}
	}, [])

	function handleToggle () {
		setIsOpen((current) => !current)
	}

	function handleSelect (optionValue: string) {
		if (value.includes(optionValue)) {
			onChange(value.filter((item) => item !== optionValue))
			return
		}

		onChange([...value, optionValue])
	}

	return (
		<div ref={rootRef} className="relative min-w-0">
			<span className="mb-1.5 block text-sm text-muted-foreground">
				{label}
			</span>
			{value.map((item) => (
				<input
					key={item}
					type="hidden"
					name={name}
					value={item}
				/>
			))}
			<button
				id={id}
				type="button"
				aria-haspopup="listbox"
				aria-expanded={isOpen}
				aria-controls={listId}
				onClick={handleToggle}
				className={[
					'flex h-11 w-full items-center justify-between rounded-md border bg-white px-3 text-left text-[0.95rem] outline-none transition-colors',
					isOpen ? 'border-forest' : 'border-[#e6e3db]',
					selectedLabels.length > 0 ? 'text-ink' : 'text-[#8a8a86]',
				].join(' ')}
			>
				<span className="truncate">{displayLabel}</span>
				<ChevronDown
					aria-hidden="true"
					className={[
						'size-4 shrink-0 text-[#8a8a86] transition-transform',
						isOpen ? 'rotate-180' : '',
					].join(' ')}
					strokeWidth={1.6}
				/>
			</button>
			{isOpen ? (
				<div
					id={listId}
					role="listbox"
					aria-label={label}
					aria-multiselectable="true"
					className="absolute top-[calc(100%+0.5rem)] left-0 z-30 w-full min-w-[14rem] overflow-hidden rounded-3xl border border-[#ebebeb] bg-white py-2 shadow-[0_16px_40px_rgba(0,0,0,0.14)]"
				>
					{options.map((option, index) => {
						const isSelected = value.includes(option.value)

						return (
							<button
								key={option.value}
								type="button"
								role="option"
								aria-selected={isSelected}
								onClick={() => handleSelect(option.value)}
								className={[
									'flex w-full items-center justify-between px-5 py-3.5 text-left text-[0.95rem] transition-colors hover:bg-[#f7f7f7]',
									index < options.length - 1
										? 'border-b border-[#ebebeb]'
										: '',
									isSelected
										? 'font-semibold text-ink'
										: 'font-normal text-ink',
								]
									.filter(Boolean)
									.join(' ')}
							>
								<span>{option.label}</span>
								{isSelected ? (
									<Check
										className="size-4 shrink-0 text-forest"
										strokeWidth={2.2}
									/>
								) : null}
							</button>
						)
					})}
				</div>
			) : null}
		</div>
	)
}
