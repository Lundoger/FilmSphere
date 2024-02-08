import clsx from 'clsx';
import type { ButtonHTMLAttributes } from 'react';
import { forwardRef } from 'react';

interface CarouselButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
}

const CarouselButton = forwardRef<HTMLButtonElement, CarouselButtonProps>(
	({ className, ...props }, ref) => (
		<button
			className={clsx('slider-button', className)}
			ref={ref}
			{...props}
		>
			btn
		</button>
	)
)

export default CarouselButton