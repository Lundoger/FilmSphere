import { GetStaticProps, NextPage } from "next";
import { Layout } from "@/components/Layout/Layout";
import { initStore } from "@/store/store";
import HeroSlider from "@/screens/home/HeroSlider/HeroSlider";
import FilterSection from "@/screens/home/FilterSection/FilterSection";

const Index: NextPage = () => {
	return (
		<Layout>
			<HeroSlider/>
			<FilterSection/>
		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const store = initStore()
	const state = store.getState()

	return { props: { initialReduxState: store.getState() } }
}

export default Index