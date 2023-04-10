import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local';
const suit = localFont({ src: './SUIT-Variable.woff2' });

export default function App({ Component, pageProps }: AppProps) {
  return <main className={suit.className}>
    <Component {...pageProps} />
  </main>
}
