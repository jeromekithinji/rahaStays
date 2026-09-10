import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { Calendar, ChevronDown } from 'lucide-react'

const fieldClassName =
	'h-11 w-full rounded-md border border-[#e6e3db] bg-white px-3 text-[0.95rem] text-ink outline-none placeholder:text-[#9a9790] focus:border-forest'

interface FieldLabelProps {
	htmlFor: string
	children: ReactNode
}

export function FieldLabel ({ htmlFor, children }: FieldLabelProps) {
	return (
		<label
			htmlFor={htmlFor}
			className="mb-1.5 block text-sm font-medium text-ink"
		>
			{children}
		</label>
	)
}

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	id: string
	label: string
}

export function TextField ({ id, label, className, ...props }: TextFieldProps) {
	return (
		<div className={className}>
			<FieldLabel htmlFor={id}>{label}</FieldLabel>
			<input id={id} className={fieldClassName} {...props} />
		</div>
	)
}

interface TextAreaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	id: string
	label: string
}

export function TextAreaField ({
	id,
	label,
	className,
	...props
}: TextAreaFieldProps) {
	return (
		<div className={className}>
			<FieldLabel htmlFor={id}>{label}</FieldLabel>
			<textarea
				id={id}
				className="min-h-[7.5rem] w-full resize-y rounded-md border border-[#e6e3db] bg-white px-3 py-2.5 text-[0.95rem] text-ink outline-none placeholder:text-[#9a9790] focus:border-forest"
				{...props}
			/>
		</div>
	)
}

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
	id: string
	label: string
	placeholder: string
	options: { value: string; label: string }[]
}

export function SelectField ({
	id,
	label,
	placeholder,
	options,
	className,
	...props
}: SelectFieldProps) {
	return (
		<div className={className}>
			<FieldLabel htmlFor={id}>{label}</FieldLabel>
			<span className="relative block">
				<select
					id={id}
					defaultValue=""
					className={`${fieldClassName} appearance-none pr-9 text-ink`}
					{...props}
				>
					<option value="" disabled>
						{placeholder}
					</option>
					{options.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
				<ChevronDown
					aria-hidden="true"
					className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-[#8a8a86]"
					strokeWidth={1.6}
				/>
			</span>
		</div>
	)
}

interface DateFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	id: string
	label: string
}

export function DateField ({ id, label, className, ...props }: DateFieldProps) {
	return (
		<div className={className}>
			<FieldLabel htmlFor={id}>{label}</FieldLabel>
			<span className="relative block">
				<input
					id={id}
					type="date"
					className={`${fieldClassName} appearance-none pr-9 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0`}
					{...props}
				/>
				<Calendar
					aria-hidden="true"
					className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-[#8a8a86]"
					strokeWidth={1.6}
				/>
			</span>
		</div>
	)
}
