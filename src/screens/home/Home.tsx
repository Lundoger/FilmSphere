import Spinner from "@/shared/Spinner/Spinner";
import homeModels from "./models/models";
import AdventureSlider from "./ui/AdventureSlider/AdventureSlider";
import AnimeSlider from "./ui/AnimeSlider/AnimeSlider";
import CartoonsSlider from "./ui/CartoonsSlider/CartoonsSlider";
import FantasySlider from "./ui/FantasySlider/FantasySlider";
import FilterSection from "./ui/FilterSection/FilterSection";
import HeroSlider from "./ui/HeroSlider/HeroSlider";
import ComedySlider from "./ui/ComedySlider/ComedySlider";
import RomanceSlider from "./ui/RomanceSlider/RomanceSlider";

const Loader = () => {
	return (
		<div className='loader--container'>
			<Spinner />
		</div>
	)
}

const Home = () => {
	const {isLoading, isError, isDataLoaded} = homeModels()

    return (
        <>
            <HeroSlider /> 
            <FilterSection />
			{isLoading && !isError && !isDataLoaded && <Loader />}
			{isError && !isDataLoaded && <p className="error__container">Something went wrong... <br/>The category sliders didn't show up</p>}
			{!isLoading && !isError && isDataLoaded &&(
				<>
					<AdventureSlider />
					<ComedySlider />
					<RomanceSlider />
					<FantasySlider />
					<CartoonsSlider />
					<AnimeSlider />
				</>
			)}
        </>
    )
}

export default Home
