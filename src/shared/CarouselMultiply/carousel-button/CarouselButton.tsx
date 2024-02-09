import clsx from 'clsx';
import { ChevronLeft } from 'lucide-react';
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
			<ChevronLeft size={30}/>
		</button>
	)
)

export default CarouselButton