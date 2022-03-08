import '../styles/globals.css'
import Layout from '../components/LayoutModule'

function MyApp({ Component, pageProps }) {
  return (
    <Layout style={{ fontFamily: "IntegralCF-Bold.otf"}}>
  <Component {...pageProps} />
  </Layout>
  )
  }

export default MyApp
