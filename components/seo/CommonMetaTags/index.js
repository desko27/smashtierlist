import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

const siteData = {
  siteTitle: 'Smash Tier List',
  siteRoot: 'https://smashtierlist.net',
  metaDescription: 'Check out which is the Tier position of your favourite Super Smash Bros' +
      ' character. A tier list is a list that ranks all characters in a game.'
}

const CommonMetaTags = ({ title }) => {
  const { pathname } = useRouter()
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={siteData.metaDescription} />

      <meta property='og:title' content={title} />
      <meta property='og:url' content={`${siteData.siteRoot}${pathname}`} />
      <meta property='og:description' content={siteData.metaDescription} />
      <meta property='og:type' content='website' />
      <meta property='og:image' content={`${siteData.siteRoot}/apple-touch-icon.png`} />
      <meta property='og:site_name' content={siteData.siteTitle} />

      <meta name='twitter:title' content={title} />
      <meta name='twitter:url' content={`${siteData.siteRoot}${pathname}`} />
      <meta name='twitter:card' content='app' />
      <meta name='twitter:site' content='desko27' />
      <meta name='twitter:creator' content='desko27' />
      <meta name='twitter:description' content={siteData.metaDescription} />
      <meta name='twitter:image' content={`${siteData.siteRoot}/apple-touch-icon.png`} />

      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
      <link rel='manifest' href='/site.webmanifest' />
      <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
      <meta name='msapplication-TileColor' content='#da532c' />
    </Head>
  )
}

export default CommonMetaTags
