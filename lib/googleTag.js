export const tagEvent = ({ action, params }) => {
  window.gtag('event', action, params)
}