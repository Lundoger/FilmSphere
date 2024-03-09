import { GetServerSideProps, NextPage } from 'next';
import Movie from '@/screens/movie/Movie';
import { filmSphereApi } from '@/api/filmSphereApi';
import { initStore } from '@/store/store';
import { Layout } from '@/widgets/Layout/Layout';

const FilmPage: NextPage = () => {
	return (
		<Layout>
			<Movie />
		</Layout>
	)
}

export const getServerSideProps: GetServerSideProps = async (params) => {
	const store = initStore()

	await store.dispatch(filmSphereApi.endpoints.getMovieById.initiate(params.query.id))

	return {props:{initialReduxState: store.getState()}}
}

export default FilmPage;