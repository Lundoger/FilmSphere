import { GetServerSideProps, NextPage } from "next"
import { filmSphereApi } from "@/api/filmSphereApi"
import { initStore } from "@/store/store"
import { Layout } from "@/widgets/Layout/Layout"

const PersonPage: NextPage = () => {
    return (
        <Layout>
            <div>person</div>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async params => {
    const store = initStore()

    await store.dispatch(filmSphereApi.endpoints.getMovieById.initiate(params.query.id))

    return { props: { initialReduxState: store.getState() } }
}

export default PersonPage
