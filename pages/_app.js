import '../styles/globals.css'
import Layout from '../components/LayoutModule'
import'../styles/style.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout style={{ fontFamily: "IntegralCF-Bold.otf"}}>
  <Component {...pageProps} />
  </Layout>
  )
  }

export default MyApp
