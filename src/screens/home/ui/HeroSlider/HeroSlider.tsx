import { CarouselMultiply } from '@/shared/CarouselMultiply/CarouselMultiply';
import HeroSlide from './HeroSlide/HeroSlide';
import { heroSlidesData } from './config';

const HeroSlider = () => {
	return (
		<section className="hero-slider">
			<div className="hero-slider__container">
				<CarouselMultiply 
					className='hero-slider__swiper'
					items={heroSlidesData}
					options={{
						loop: true,
					}}
					renderItem={(item) => <HeroSlide item={item}/>}
					slideClassName='hero-slider__swiper-slide'
				/>
			</div>
		</section>
	)
}

export default HeroSlider