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

export default FilmPage
