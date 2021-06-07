import { FC, useEffect } from 'react'
import { AppProps } from 'next/app'
import { useStore } from 'react-redux'
import { Layout } from '@components'
import ProgressBar from '@badrap/bar-of-progress'
import Router from 'next/router'
import wrapper from '@store'
import Head from 'next/head'
import '@styles/globals.scss'

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
  const store: any = useStore()

  useEffect(() => {
    store.__persistor.persist()
  }, [])

  const progress = new ProgressBar({
    size: 5,
    color: '#FDCA40',
    delay: 100,
  })

  Router.events.on('routeChangeStart', progress.start);
  Router.events.on('routeChangeComplete', progress.finish);
  Router.events.on('routeChangeError', progress.finish);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default wrapper.withRedux(WrappedApp)
