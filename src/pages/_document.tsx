import { Head, Html, Main, NextScript } from "next/document"

const Document = () => (
    <Html className="page" lang="ru">
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
            <meta content="#000" name="theme-color" />
        </Head>
        <body className="page__body">
            <Main />
            <div id="modal" />
            <NextScript />
        </body>
    </Html>
)

export default Document
