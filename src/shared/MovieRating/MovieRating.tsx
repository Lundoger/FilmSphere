import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

interface RatingProps extends PropsWithChildren {
	className?: string,
	size?: 'small' | 'medium',
	showState?: boolean,
}

export const MovieRating = ({
	children,
	showState,
	size = 'medium',
	className,
}: RatingProps) => {
	const rating = Number(children)
	const isHighRating = rating >= 6

	return (
		<span
			className={clsx(
				'rating',
				showState && isHighRating && 'rating--high',
				`rating--${size}`,
				className
			)}
		>
			{children}
		</span>
	)
}