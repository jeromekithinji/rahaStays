import Image from 'next/image'

import { cn } from '@/lib/utils'

interface LogoMarkProps {
	className?: string
	priority?: boolean
	size?: number
}

export function LogoMark ({
	className,
	priority = false,
	size = 40,
}: LogoMarkProps) {
	return (
		<Image
			src="/images/logo.png"
			alt=""
			width={size}
			height={size}
			className={cn('shrink-0 rounded-full', className)}
			priority={priority}
		/>
	)
}
