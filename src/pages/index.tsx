import React from 'react'
import wrapper from '@store'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import { getPage } from '@store/actions'
import { Home } from '@components'
import { mapProps } from '@utils'

const HomePage = () => {
  const home = useSelector((state: any) => state?.page?.homePage?.home)

  return (
    <>
      <Head>
        <title>Píntalo</title>
      </Head>
      <Home content={home} />
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }: any) => {
    await mapProps(store, getPage('homePage'))
  }
)

export default HomePage
