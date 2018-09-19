/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default {
  getSiteData: () => ({
    title: 'Smash Tier List',
    description: 'Check out which is the Tier position of your favourite Super Smash Bros'
      + ' character. A tier list is a list that ranks all characters in a game based on the'
      + ' strength of their fighting abilities as well as their potential to win matches'
      + ' under tournament conditions',
  }),
  siteRoot: 'https://smash-tier-list.com',
  getRoutes: () => ([
    { path: '/' },
    { path: '/64' },
    { path: '/melee' },
    { path: '/brawl' },
    { path: '/ssb4' },
  ]),
  webpack: (config, { stage }) => {
    config.node = { fs: 'empty' };
    return config;
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet();

    // the styles are collected from each page component
    const html = render(sheet.collectStyles(<Comp />));

    // the collected page styles are stored in `meta`
    meta.styleTags = sheet.getStyleElement(); // eslint-disable-line

    // return the html string for the page
    return html;
  },
  // eslint-disable-next-line
  Document: ({ Html, Head, Body, children, siteData, renderMeta }) => {
    return (
      <Html lang="en-US">
        <Head>
          <meta charSet="UTF-8" />

          <title>{siteData.title}</title>
          <meta name="description" content={siteData.description} />

          <meta property="og:title" content={siteData.title} />
          <meta property="og:description" content={siteData.description} />

          <meta name="viewport" content="width=device-width, initial-scale=0.9, user-scalable=no" />
          <meta name="theme-color" content="#000000" />
          {renderMeta.styleTags}
          <noscript>
            <style type="text/css">
              {'img.loading { opacity: 1 !important; }'}
            </style>
          </noscript>
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" />
        </Head>
        <Body>{children}</Body>
      </Html>
    );
  },
};
