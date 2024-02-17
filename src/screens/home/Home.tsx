import HeroSlider from "./HeroSlider/HeroSlider";
import FilterSection from "./FilterSection/FilterSection";
import ComedySlider from "./ComedySlider/ComedySlider";
import FantasySlider from "./FantasySlider/FantasySlider";
import RomanceSlider from "./RomanceSlider/RomanceSlider";
import AdventureSlider from "./AdventureSlider/AdventureSlider";
import AnimeSlider from "./AnimeSlider/AnimeSlider";
import CartoonsSlider from "./CartoonsSlider/CartoonsSlider";

const Home = () => {
    return (
        <>
            <HeroSlider />
            <FilterSection />
            <AdventureSlider />
            <ComedySlider />
            <RomanceSlider />
            <FantasySlider />
            <CartoonsSlider />
            <AnimeSlider />
        </>
    );
};

export default Home;
