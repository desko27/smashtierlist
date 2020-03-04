import Head from 'next/head'

import '../global.css'

import domain from '../domain'
import DomainContext from '../domain/context'

function CustomApp ({ Component, pageProps }) {
  return (
    <DomainContext.Provider value={domain}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=0.9, user-scalable=no' />
        <meta name='theme-color' content='#000000' />

        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
      </Head>
      <Component {...pageProps} />
    </DomainContext.Provider>
  )
}

CustomApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps({ ...ctx, domain })
  }
  return { pageProps }
}

export default CustomApp
