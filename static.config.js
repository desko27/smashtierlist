/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default {
  getSiteData: () => ({
    title: 'Smash Tier List',
  }),
  getRoutes: () => ([
    { path: '/' },
    { path: '/smash-64' },
    { path: '/melee' },
    { path: '/brawl' },
    { path: '/smash-4' },
  ]),
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
