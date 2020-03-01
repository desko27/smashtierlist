export const GA_TRACKING_ID = 'UA-69148909-3'

export const pageview = url => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  })
}
