import Title from './Title/Title'
import Description from './Description/Description'
import Info from './Info/Info'


const Hero = () => {
	return (
		<section className="movie-hero">
			<div className="movie-hero__container">
				<Title/>
				<Description/>
				<Info/>
			</div>
		</section>
	)
}

export default Hero