import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';
import Image from 'next/image';
import { useGetRecommendTitleQuery } from '@/api/filmSphereApi';

const HeroSlider = () => {
	const {data, isLoading, isError} = useGetRecommendTitleQuery({limit: 10})

	return (
		<section className="hero__slider hero-slider">
			<div className="hero-slider__container">
				<Swiper
					className='slider'
					spaceBetween={15}
					slidesPerView={1}
					initialSlide={1}
				>
					<SwiperSlide>
						<Link className='hero-slider__slide hero-slide' href={'#'}>
							<div className="hero-slide__image">
								{/* <Image
									alt="asd"
									fill
									quality={100}	
									sizes="100%"
									src={}
								/> */}
							</div>
							<div className="hero-slide__content">
								<h3 className="hero-slide__name">Этот глупый свин не понимает мечты девочки зайки</h3>
								<div className="hero-slide__actions">
									<span className="hero-slide__rating">10.0</span>
									<span className="hero-slide__year">2021</span>
									<span className="hero-slide__genre">Romantic</span>
								</div>
							</div>
						</Link>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	)
}

export default HeroSlider