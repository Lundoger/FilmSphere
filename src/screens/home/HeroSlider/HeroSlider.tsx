import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';
import Image from 'next/image';
import { useGetRecommendTitleQuery } from '@/api/filmSphereApi';
import { CarouselMultiply } from '@/shared/CarouselMultiply/CarouselMultiply';
import HeroSlide from './components/HeroSlide';

const HeroSlider = () => {
	const {data, isLoading, isError} = useGetRecommendTitleQuery({limit: 10})

	return (
		<section className="hero__slider hero-slider">
			<div className="hero-slider__container">
				{data && !isLoading && !isError && (
					<CarouselMultiply 
						className='hero-swiper'
						items={data?.docs}
						options={{
							loop: true,
							initialSlide: 1,
						}}
						renderItem={(item) => <HeroSlide item={item}/>}
						slideClassName='hero__slide slide-hero'
					/>
				)}
			</div>
		</section>
	)
}

export default HeroSlider