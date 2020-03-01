import Head from 'next/head'
import Router from 'next/router'

import '../global.css'

import domain from '../domain'
import DomainContext from '../domain/context'
import { pageview } from '../lib/gtag'

Router.events.on('routeChangeComplete', url => pageview(url))

function CustomApp ({ Component, pageProps }) {
  return (
    <DomainContext.Provider value={domain}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=0.9, user-scalable=no' />
        <meta name='theme-color' content='#000000' />
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
