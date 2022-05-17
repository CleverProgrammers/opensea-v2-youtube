import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Rinkeby}>
      <ThemeProvider enableSystem={true} attribute='class'>
        <Component {...pageProps} />
      </ThemeProvider>
    </ThirdwebProvider>
  )
}

export default MyApp
