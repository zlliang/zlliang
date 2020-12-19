// See https://github.com/FortAwesome/react-fontawesome#nextjs
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
