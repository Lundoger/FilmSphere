import Footer from "@/widgets/Footer/Footer"
import AdventureSlider from "./ui/AdventureSlider/AdventureSlider"
import AnimeSlider from "./ui/AnimeSlider/AnimeSlider"
import CartoonsSlider from "./ui/CartoonsSlider/CartoonsSlider"
import ComedySlider from "./ui/ComedySlider/ComedySlider"
import FantasySlider from "./ui/FantasySlider/FantasySlider"
import FilterSection from "./ui/FilterSection/FilterSection"
import HeroSlider from "./ui/HeroSlider/HeroSlider"
import RomanceSlider from "./ui/RomanceSlider/RomanceSlider"

const Home = () => {
    return (
        <>
            <HeroSlider />
            <FilterSection />
            <AdventureSlider />
            <ComedySlider />
            <FantasySlider />
            <RomanceSlider />
            <CartoonsSlider />
            <AnimeSlider />
            <Footer />
        </>
    )
}

export default Home
