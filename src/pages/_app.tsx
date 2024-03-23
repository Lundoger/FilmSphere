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
                    Онлайн кинотеатр FilmSphere - Смотрите фильмы, сериалы и мультфильмы онлайн
                    бесплатно в высоком качестве
                </title>
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
                />
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
