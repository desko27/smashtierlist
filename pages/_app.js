import Head from 'next/head'

import '../global.css'

export default function CustomApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=0.9, user-scalable=no' />
        <meta name='theme-color' content='#000000' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
