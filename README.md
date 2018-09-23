<p align="center">
  <a href="https://smash-tier-list.com" alt="Smash Tier List">
    <img src="https://user-images.githubusercontent.com/4168389/45923712-a0da7c80-beed-11e8-82bf-4acc17664466.png" alt="Super Smash Bros Ball" />
  </a>
</p>

<h1 align="center">🎮 🎯 <a href="https://smash-tier-list.com" alt="Smash Tier List">Smash Tier List</a> &nbsp; <a href="https://twitter.com/intent/tweet?text=Check%20which%20Tier%20position%20is%20your%20favourite%20Super%20Smash%20Bros%20character&url=https://smash-tier-list.com&via=desko27&hashtags=smashbros,smash,ssb,ssb4,tierlist"><img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=social" /></a></h1>

<p align="center">
  <a href="https://travis-ci.org/desko27/smash-tier-list"><img src="https://travis-ci.org/desko27/smash-tier-list.svg?branch=develop" alt="Build Status" /></a>
  <a href="https://coveralls.io/github/desko27/smash-tier-list?branch=develop"><img src="https://coveralls.io/repos/github/desko27/smash-tier-list/badge.svg?branch=develop" alt="Coverage Status" /></a>
</p>

<p align="center">
  <a href="https://smash-tier-list.com" alt="Smash Tier List">See it online ↗</a>
</p>

<p align="center">
  An Open Source Tier List application that covers all characters in Super Smash Bros game series with UX and performance in mind. Built on top of React and proudly hosted on Netlify.
</p>

<p align="center">
  <a href="https://github.com/nozzle/react-static" alt="React Static">
    <img width="280" src="https://user-images.githubusercontent.com/4168389/45922345-0b79c100-beca-11e8-8fe3-88f103d4995b.png" />
  </a>
</p>

<p align="center">
  <a href="https://github.com/yarnpkg/yarn" alt="Yarn">
    <img height="70" src="https://user-images.githubusercontent.com/4168389/45922413-bf2f8080-becb-11e8-9dd7-f50bb6e063f0.png" />
  </a>
  <a href="https://github.com/facebook/react" alt="React">
    <img height="70" src="https://user-images.githubusercontent.com/4168389/45922462-e3d82800-becc-11e8-99ca-b8677de2168b.png" />
  </a>
  <a href="https://github.com/reduxjs/redux" alt="Redux">
    <img height="70" src="https://user-images.githubusercontent.com/4168389/45922501-80022f00-becd-11e8-9c77-f4c563683297.png" />
  </a>
  <a href="https://github.com/webpack/webpack" alt="Webpack">
    <img height="70" src="https://user-images.githubusercontent.com/4168389/45922477-26016980-becd-11e8-897d-96da8127b2e0.png" />
  </a>
  <a href="https://github.com/eslint/eslint" alt="ESLint">
    <img height="70" src="https://user-images.githubusercontent.com/4168389/45922421-e71ee400-becb-11e8-9134-22cc476008f3.png" />
  </a>
  <a href="https://github.com/mochajs/mocha" alt="Mocha">
    <img height="70" src="https://user-images.githubusercontent.com/4168389/45922483-3fa2b100-becd-11e8-9ffa-1e5f3f789c5c.png" />
  </a>
  <a href="https://github.com/styled-components/styled-components" alt="Styled Components">
    <img height="70" src="https://user-images.githubusercontent.com/4168389/45922515-ed15c480-becd-11e8-8191-b0c5d5df6f74.png" />
  </a>
  <a href="https://netlify.com" alt="Netlify">
    <img height="70" src="https://user-images.githubusercontent.com/4168389/45922365-8ba02680-beca-11e8-8c89-a8f6fe84bab6.png" />
  </a>
  <a href="https://aws.amazon.com/s3‎" alt="AWS S3">
    <img height="70" src="https://user-images.githubusercontent.com/4168389/45922521-1df5f980-bece-11e8-8fa1-99201d5bd322.png" />
  </a>
</p>


## 💎 SketchApp Design
<details>
  <summary>Desktop HD - Mockup vs Screenshot</summary>
  <p>
    <img width="720" src="https://user-images.githubusercontent.com/4168389/45922912-aa0d1e80-bed8-11e8-9005-aab431dd48b8.png" alt="sketchapp - desktop hd - ssb4" />
    <img width="720" src="https://user-images.githubusercontent.com/4168389/45923025-bb572a80-beda-11e8-899e-978b97501826.png" alt="actual - desktop hd - ssb4" />
  </p>
</details>
<details>
  <summary>Mobile - Mockup vs Screenshot</summary>
  <p>
    <img valign="top" width="221" src="https://user-images.githubusercontent.com/4168389/45922913-ada0a580-bed8-11e8-9158-3eb09c564f46.png" alt="sketchapp - mobile - ssb4" />
    <img valign="top" width="221" src="https://user-images.githubusercontent.com/4168389/45923039-096c2e00-bedb-11e8-8de8-af5c800b515a.png" alt="actual - mobile - ssb4" />
  </p>
</details>

## 🎬 Getting Started

### Installation

```
$ yarn
$ cp .env.example .env
```

Note: while it's not required in order to run it locally in dev mode, it is important to define your own S3 bucket data in `.env` to be able to deploy assets to S3.

### Development server

```
$ yarn start
```

Then you should be able to open a browser at http://localhost:3000 and see the application.

## ✅ Syntax check and tests

### Run ESLint

```
$ yarn eslint
```

### Run tests

```
$ yarn test
```

### Generate coverage

```
$ yarn coverage
```

## 🛠 Building the project

### Make a production build to run it locally

```
$ yarn stage
$ yarn serve
```

Note: if you use `stage:s3` instead of `stage`, all the assets that have been processed by webpack are deployed into the S3 bucket right away.

### Make a definitive production build

```
$ yarn build
```

Note: again, you can use `build:s3` instead of `build` and compiled assets are sent to the S3 bucket.
