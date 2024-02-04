import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';
import Image from 'next/image';

const HeroSlider = () => {
	return (
		<section className="hero">
			<div className="hero__slider slider">
				<Swiper
					spaceBetween={50}
      				slidesPerView={3}
				>
					<SwiperSlide>
						<Link className='slider__slide slide' href={'#'}>
							<div className="slide__image">
								{/* <Image
									alt="asd"
									fill
									quality={100}	
									sizes="100%"
									src={}
								/> */}
							</div>
							<div className="slide__content">
								<h3 className="slide__name">Этот глупый свин не понимает мечты девочки зайки</h3>
								<div className="slide__actions">
									<span className="slide__rating">10.0</span>
									<span className="slide__year">2021</span>
									<span className="slide__genre">Romantic</span>
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