import { GetStaticProps, NextPage } from "next";
import { Layout } from "@/widgets/Layout/Layout";
import { initStore } from "@/store/store";
import Home from "@/screens/home/Home";

const Index: NextPage = () => {
	return (
		<Layout>
			<Home/>
		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const store = initStore()
	const state = store.getState()

	return { props: { initialReduxState: store.getState() } }
}

export default Index