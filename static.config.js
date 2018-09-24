/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import util from 'util';
import webpack from 'webpack';
import ImageminPlugin from 'imagemin-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import S3Plugin from 'webpack-s3-plugin';
import path from 'path';

const {
  ENV,
  DEPLOY,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_S3_BUCKET_STAGING,
  AWS_S3_BUCKET_STAGING_REGION: S3_STAGING_REGION,
  AWS_S3_BUCKET_PRODUCTION,
  AWS_S3_BUCKET_PRODUCTION_REGION: S3_PRODUCTION_REGION,
} = process.env;

export default {
  getSiteData: () => ({
    siteTitle: 'Smash Tier List',
    siteRoot: 'https://smash-tier-list.com',
    metaDescription: 'Check out which is the Tier position of your favourite Super Smash Bros'
      + ' character. A tier list is a list that ranks all characters in a game based on the'
      + ' strength of their fighting abilities as well as their potential to win matches'
      + ' under tournament conditions.',
  }),
  siteRoot: 'https://smash-tier-list.com',
  getRoutes: () => ([
    { path: '/' },
    { path: '/64' },
    { path: '/melee' },
    { path: '/brawl' },
    { path: '/ssb4' },
  ]),
  webpack: [
    (config, { stage }) => {
      config.resolve.alias = {
        // Fix for ESLint: https://goo.gl/8kgMF5
        common: path.resolve('src/common'),
        assets: path.resolve('src/assets'),
      };

      config.plugins = [
        ...config.plugins,

        // make some .env vars available to the client (end-user's browser)
        new webpack.DefinePlugin({
          'process.env': {
            ENV: JSON.stringify(ENV),
            AWS_S3_BUCKET_STAGING: JSON.stringify(AWS_S3_BUCKET_STAGING),
            AWS_S3_BUCKET_STAGING_REGION: JSON.stringify(S3_STAGING_REGION),
            AWS_S3_BUCKET_PRODUCTION: JSON.stringify(AWS_S3_BUCKET_PRODUCTION),
            AWS_S3_BUCKET_PRODUCTION_REGION: JSON.stringify(S3_PRODUCTION_REGION),
          },
        }),

        // compress all images
        // make sure that this is after any plugins that add images
        new ImageminPlugin({
          disable: stage === 'dev',
          pngquant: {
            quality: '95-100',
          },
        }),

        // get gzipped files
        new CompressionPlugin({
          asset: '[path].gz[query]',
          algorithm: 'gzip',
          test: /\.js$|\.css$|\.html$/,
          threshold: 10240,
          minRatio: 0.8,
        }),

        // upload assets to s3
        stage === 'dev' || DEPLOY !== 's3' ? { apply: () => {} } : (
          new S3Plugin({
            include: /\.(jpe?g|png|gif|svg)$/,
            s3Options: {
              accessKeyId: AWS_ACCESS_KEY_ID,
              secretAccessKey: AWS_SECRET_ACCESS_KEY,
              region: ENV === 'production' ? S3_PRODUCTION_REGION : S3_STAGING_REGION,
            },
            s3UploadOptions: {
              Bucket: ENV === 'production' ? AWS_S3_BUCKET_PRODUCTION : AWS_S3_BUCKET_STAGING,
              CacheControl: 'max-age=31536000', // 1 year
            },
          })
        ),
      ];

      // https://iamakulov.com/notes/optimize-images-webpack/
      const newRules = [
        {
          test: /\.(jpe?g|png|gif)$/,
          exclude: path.resolve(__dirname, 'src/assets/img/chars'),
          loaders: [
            {
              loader: 'url-loader',
              options: {
                // images larger than 10 KB won't be inlined
                limit: 10 * 1024,
              },
            },
          ],
        },
        {
          test: /\.png$/,
          include: path.resolve(__dirname, 'src/assets/img/chars'),
          loader: 'responsive-loader',
          options: {
            size: 150,
            name: '[hash].[ext]',
          },
        },
        {
          test: /\.svg$/,
          loader: 'svg-url-loader',
          options: {
            // svgs larger than 100 KB won't be inlined
            limit: 100 * 1024,
            // remove quotes around the encoded url, they're rarely useful
            noquotes: true,
          },
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/,
          loader: 'image-webpack-loader',
          // apply loader before url-loader/svg-url-loader and not duplicate it in rules with them
          enforce: 'pre',
        },
      ];

      const rules = config.module.rules[0].oneOf;
      config.module.rules[0].oneOf = [
        ...newRules,
        ...rules,
      ];

      return config;
    },
    (config) => {
      // comment out to see the full webpack config at build time
      // console.log(util.inspect(config.module.rules[0].oneOf, false, null, true));
    },
  ],
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
          <meta
            name="google-site-verification"
            content="aFOAcZeGtRB40F1nauAUGNlZ1WPySap0eHhMWO0QKDU"
          />

          {/* title is in SmashTierList component */}
          <meta name="description" content={siteData.metaDescription} />

          {/* og:title and other specific open graph metatags are in SmashTierList component */}
          <meta property="og:description" content={siteData.metaDescription} />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={`${siteData.siteRoot}/apple-touch-icon.png`} />
          <meta property="og:site_name" content={siteData.siteTitle} />

          {/* twitter:title and other specific twitter metatags are in SmashTierList component */}
          <meta property="twitter:card" content="app" />
          <meta property="twitter:site" content="desko27" />
          <meta property="twitter:creator" content="desko27" />
          <meta property="twitter:description" content={siteData.metaDescription} />
          <meta property="twitter:image" content={`${siteData.siteRoot}/apple-touch-icon.png`} />

          <meta name="viewport" content="width=device-width, initial-scale=0.9, user-scalable=no" />
          <meta name="theme-color" content="#000000" />

          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />

          {renderMeta.styleTags}

          <noscript>
            <style type="text/css">
              {`
              .loading {
                opacity: 1 !important;
                transform: none !important;
              }
              .loading-bar {
                display: none !important;
              }
              `}
            </style>
          </noscript>

          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
            rel="stylesheet"
          />
        </Head>
        <Body>{children}</Body>
      </Html>
    );
  },
};
