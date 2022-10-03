import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";


function MyApp({ Component, pageProps }: AppProps) {

  const activeChainId = ChainId.Polygon;
  return(
      <ThirdwebProvider desiredChainId={activeChainId}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </ThirdwebProvider>
  )
}


export default MyApp
