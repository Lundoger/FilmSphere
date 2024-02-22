import { NextPage } from "next";
import { Layout } from "@/widgets/Layout/Layout";
import Home from "@/screens/home/Home";

const Index: NextPage = () => {
	return (
		<Layout>
			<Home/>
		</Layout>
	)
}

export default Index