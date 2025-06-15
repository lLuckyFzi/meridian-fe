import 'meridian@/styles/globals.css'
import AOSInit from 'meridian@/components/AOSInit'
import Footer from 'meridian@/layout/Footer'
import Header from 'meridian@/layout/Header'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>PT Meridian Global Utama</title>
      <link rel="icon" href="/meridian-favicon.svg" />
    </Head>
    <AOSInit />
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
}
