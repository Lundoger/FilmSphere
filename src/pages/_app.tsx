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
                <meta name="theme-color" content="#000000" />
            </Head>
            <NextNProgress
                color="var(--bg-secondary)"
                height={3}
                options={{ showSpinner: false }}
            />
            <Component {...pageProps} />
        </Provider>
    )
}
