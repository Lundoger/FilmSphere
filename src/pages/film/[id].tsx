import { GetServerSideProps, NextPage } from "next"
import Movie from "@/screens/movie/Movie"
import { filmSphereApi } from "@/api/filmSphereApi"
import { initStore } from "@/store/store"
import { Layout } from "@/widgets/Layout/Layout"
import { paths } from "@/helpers/routing"

const FilmPage: NextPage = () => {
    return (
        <Layout>
            <Movie />
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    if (!params?.id) {
        return {
            redirect: {
                destination: paths.home,
                permanent: false,
            },
        }
    }

    const store = initStore()

    await store.dispatch(filmSphereApi.endpoints.getMovieById.initiate(params.id))

    return {
        props: {
            initialReduxState: store.getState(),
        },
    }
}

export default FilmPage
