import { NextPage } from "next"
import { Layout } from "@/widgets/Layout/Layout"
import Person from "@/screens/person/Person"

const PersonPage: NextPage = () => {
    return (
        <Layout>
            <Person />
        </Layout>
    )
}

export default PersonPage
