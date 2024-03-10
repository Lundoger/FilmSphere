import "@/styles/style.scss"
import type { AppProps } from "next/app"
import { useStore } from "@/store/store"
import { Provider } from "react-redux"
import Head from "next/head"
import NextNProgress from "nextjs-progressbar"

export default function MyApp({ Component, pageProps }: AppProps) {
    const store = useStore(pageProps.initialReduxState)

    return (
        <Provider store={store}>
            <Head>
                <title>
                    Online Cinema FilmSphere - Watch Movies, TV Shows, and Cartoons Online for Free
                    in High Quality
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
                <meta name="theme-color" content="#1a1a1a" />
            </Head>
            <NextNProgress
                color="var(--bg-secondary)"
                height={2}
                options={{ showSpinner: false }}
            />
            <Component {...pageProps} />
        </Provider>
    )
}
