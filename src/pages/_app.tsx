import GlobalStyles from '@/styles/Global.styled'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <GlobalStyles />
      <Component {...pageProps} />
    </main>
  )
}
