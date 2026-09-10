import { CONTACT_METHODS } from '@/data/contact'

export function ContactMethods () {
	return (
		<ul className="grid gap-3 lg:grid-cols-3 lg:gap-5">
			{CONTACT_METHODS.map((method) => {
				const Icon = method.icon

				return (
					<li key={method.title}>
						<a
							href={method.href}
							className="flex h-full items-center gap-4 rounded-2xl border border-[#e6e3db] bg-white px-5 py-5 transition-colors hover:border-forest"
						>
							<Icon
								className="size-5 shrink-0 text-forest"
								strokeWidth={1.6}
							/>
							<span>
								<span className="block text-[0.95rem] font-semibold text-ink">
									{method.title}
								</span>
								<span className="mt-0.5 block text-sm text-muted-foreground">
									{method.value}
								</span>
							</span>
						</a>
					</li>
				)
			})}
		</ul>
	)
}
