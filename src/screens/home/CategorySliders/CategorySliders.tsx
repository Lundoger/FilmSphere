import ComedySlider from "../ComedySlider/ComedySlider";
import FantasySlider from "../FantasySlider/FantasySlider";
import RomanceSlider from "../RomanceSlider/RomanceSlider";
import AdventureSlider from "../AdventureSlider/AdventureSlider";
import AnimeSlider from "../AnimeSlider/AnimeSlider";
import CartoonsSlider from "../CartoonsSlider/CartoonsSlider";
import { useAppSelector } from "@/hooks/useAppSelector";
import Spinner from "@/shared/Spinner/Spinner";

const CategorySliders = () => {
	const {  
		adventureData,
		animeData,
		cartoonData,
		comedyData,
		romanceData,
		fantasyData
	} = useAppSelector(state => state.categoryReducer)

	return (
		<>
			{!adventureData || !animeData || !cartoonData || !comedyData || !romanceData || !fantasyData ? (
				<div className='loader--container'>
					<Spinner />
				</div>
			) : (
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

export default CategorySliders