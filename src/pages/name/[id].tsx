import { GetServerSideProps, NextPage } from "next"
import { filmSphereApi } from "@/api/filmSphereApi"
import { initStore } from "@/store/store"
import { Layout } from "@/widgets/Layout/Layout"
import Person from "@/screens/person/Person"

const PersonPage: NextPage = () => {
    return (
        <Layout>
            <Person />
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async params => {
    const store = initStore()

    await store.dispatch(filmSphereApi.endpoints.getPersonById.initiate(params.query.id))

    return { props: { initialReduxState: store.getState() } }
}

export default PersonPage
