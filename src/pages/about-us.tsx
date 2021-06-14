import React from 'react'
import wrapper from '@store'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import { getPage } from '@store/actions'
import { About } from '@components'
import { mapProps } from '@utils'

const AboutUs = () => {
  const { page: { aboutPage: { about } } } = useSelector((state: any) => state)

  return (
    <>
      <Head>
        <title>Sobre Nosotros</title>
      </Head>
      <About content={about} />
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    await mapProps(store, getPage('aboutPage'))
  }
)

export default AboutUs
