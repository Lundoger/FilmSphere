import FilterSectionItem from './components/FilterSectionItem'
import { SwiperSlide, Swiper } from 'swiper/react';
import { FreeMode } from 'swiper';
import clsx from 'clsx';
import { items } from './config/config';


const FilterSection = () => {

	return (
		<section className="filter-section">
			<div className="filter-section__container">
				<Swiper
					className={clsx('filter-section__slider', 'slider')}
					freeMode
					modules={[FreeMode]}
					// onSlideChange={slideChange}
					// onSliderMove={slideChange}
					slidesPerView="auto"
				>
					{items.map((item, i) => (
						<SwiperSlide style={{width: 'auto'}} className='filter-section__swiper-slide'>
							<FilterSectionItem key={i} item={item}/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default FilterSection