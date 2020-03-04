import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

const siteData = {
  siteTitle: 'Smash Tier List',
  siteRoot: 'https://smashtierlist.net',
  metaDescription: 'Check out which is the Tier position of your favourite Super Smash Bros' +
      ' character. A tier list is a list that ranks all characters in a game.'
}

const CommonMetaTags = ({ title, description: descriptionProp }) => {
  const { pathname } = useRouter()
  const description = descriptionProp || siteData.metaDescription

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical='https://www.canonical.ie/'
        openGraph={{
          url: `${siteData.siteRoot}${pathname}`,
          title,
          description,
          images: [{
            url: `${siteData.siteRoot}/apple-touch-icon.png`,
            width: 180,
            height: 180,
            alt: siteData.siteTitle
          }],
          site_name: siteData.siteTitle
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image'
        }}
      />
    </>
  )
}

CommonMetaTags.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
}

export default CommonMetaTags
