import { useGetRecommendTitleQuery } from '@/api/filmSphereApi';
import { CarouselMultiply } from '@/shared/CarouselMultiply/CarouselMultiply';
import HeroSlide from './HeroSlide/HeroSlide';

const HeroSlider = () => {
	const {data, isLoading, isError} = useGetRecommendTitleQuery({limit: 10})

	return (
		<section className="hero-slider">
			<div className="hero-slider__container">
				{data && !isLoading && !isError && (
					<CarouselMultiply 
						className='hero-slider__swiper'
						items={data.docs}
						options={{
							loop: true,
							initialSlide: 1,
						}}
						renderItem={(item) => <HeroSlide item={item}/>}
						slideClassName='hero-slider__swiper-slide'
					/>
				)}
			</div>
		</section>
	)
}

export default HeroSlider