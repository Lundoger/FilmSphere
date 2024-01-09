import '@/styles/style.scss';
import type { AppProps } from 'next/app';
import { useStore } from '@/store/store';
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
	const store = useStore(pageProps.initialReduxState)

	const router = useRouter()

	NProgress.configure({
		showSpinner: false,
	})

	useEffect(() => {
		const handleRouteStart = () => NProgress.start();
		const handleRouteDone = () => NProgress.done();

		router.events.on('routeChangeStart', handleRouteStart);
		router.events.on('routeChangeComplete', handleRouteDone);
		router.events.on('routeChangeError', handleRouteDone);

		return () => {
			router.events.off('routeChangeStart', handleRouteStart);
			router.events.off('routeChangeComplete', handleRouteDone);
			router.events.off('routeChangeError', handleRouteDone);
		}
	}, [])

	return (
		<Provider store={store}>
			<Head>
				<title>
					Online Cinema FilmSphere - Watch Movies, TV Shows, and Cartoons Online for Free in High Quality
				</title>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
				/>
				<meta property="og:description" content="FilmSphere - Movies and TV Shows" />
				<meta property="og:title" content="FilmSphere - Movies and TV Shows" />
				<meta
					name="description"
					content="Create a cinema at home! Watch online movies in high quality in a pleasant home environment and at your convenient time. A variety of options are always available for you: TV shows, movies, cartoons, and much more."
				/>
				<meta
					name="keywords"
					content="watch movies online in excellent quality without SMS cinema video watch new movie online cinema 2012 2013 view video clips"
				/>
				<meta name="apple-mobile-web-app-capable" content="yes" />
			</Head>
			<Component {...pageProps} />
		</Provider>
	)
}