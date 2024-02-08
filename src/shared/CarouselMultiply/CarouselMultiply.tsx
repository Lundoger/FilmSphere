import 'swiper/css';
import clsx from 'clsx';
import { useCallback, type ReactNode } from 'react';
import { SwiperOptions } from 'swiper/types';
import { Navigation } from 'swiper/modules';
import type { SwiperProps } from 'swiper/react';
import { SwiperSlide, Swiper } from 'swiper/react';
import CarouselButton from './carousel-button/CarouselButton';
import { useDomRefWithSetter } from '@/hooks/useDomRefWithSetter';

export interface CarouselMultiplyProps<T> extends SwiperProps {
	items: T[] | undefined;
	prevBtnClass?: string;
	nextBtnClass?: string;
	renderItem: (item: T, i: number) => ReactNode;
	className?: string;
	slideClassName?: string;
	options?: SwiperOptions;
}

export const CarouselMultiply = <T, _>({
	items,
	renderItem,
	className,
	slideClassName,
	navigation = true,
	options,
	modules,
	prevBtnClass,
	nextBtnClass,
	...props
}: CarouselMultiplyProps<T>) => {
	const [nextEl, nextElRef] = useDomRefWithSetter<HTMLButtonElement>();
	const [prevEl, prevElRef] = useDomRefWithSetter<HTMLButtonElement>();

	const renderSlides = useCallback((_items: typeof items) => _items?.map((item, i) => (
		<SwiperSlide
			className={slideClassName}
			key={i}
		>
			{renderItem(item, i)}
		</SwiperSlide>
	)), [slideClassName, renderItem])

	const swiperOptions: SwiperOptions = {
		slidesPerView: 'auto',
		spaceBetween: 15,
		...options,
	}

	const DEFAULT_MODULES = [Navigation];

	return (
		<Swiper
			className={clsx('slider', className)}
			modules={[...(modules ?? DEFAULT_MODULES)]}
			navigation={{
				nextEl,
				prevEl
			}}
			{...swiperOptions}
			{...props}
		>
			{navigation && (
				<>
					<CarouselButton
						className={clsx('prev', prevBtnClass)}
						ref={prevElRef}
					/>
					<CarouselButton
						className={clsx('next', nextBtnClass)}
						ref={nextElRef}
					/>
				</>
			)}
			{renderSlides(items)}
		</Swiper>
	)
}