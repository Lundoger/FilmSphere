import { GetStaticProps, NextPage } from "next";
import { Layout } from "@/components/Layout/Layout";
import { initStore } from "@/store/store";

const Index: NextPage = () => {
	return (
		<Layout>
			<div>Home Page</div>
		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const store = initStore()
	const state = store.getState()

	return { props: { initialReduxState: store.getState() } }
}

export default Index
