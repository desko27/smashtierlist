/* eslint-disable react/jsx-filename-extension */
import React from 'react';

export default {
  getSiteData: () => ({
    title: 'Smash Tier List',
  }),
  getRoutes: () => ([
    {
      path: '/',
      component: 'src/containers/App',
    },
  ]),
  // eslint-disable-next-line
  Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=0.9, user-scalable=no" />
        <meta name="theme-color" content="#000000" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
};