import React from 'react'
import wrapper from '@store'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import { Login } from '@components'
import { getPage } from '@store/actions'
import { mapProps } from '@utils'

const LoginPage = () => {
  const back = useSelector((state: any) => state?.page?.loginPage?.back)

  return (
    <>
      <Head>
        <title>Inicio de sesión</title>
      </Head>
      <Login content={back} />
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }: any) => {
    await mapProps(store, getPage('loginPage'))
  }
)

export default LoginPage
