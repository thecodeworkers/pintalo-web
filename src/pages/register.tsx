import React from 'react'
import wrapper from '@store'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import { Register } from '@components'
import { getPage } from '@store/actions'
import { mapProps } from '@utils'

const RegisterPage = () => {
  const back = useSelector((state: any) => state?.page?.registerPage?.back)

  return (
    <>
       <Head>
        <title>Registro</title>
      </Head>
      <Register content={back} />
    </>
  )

}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }: any) => {
    await mapProps(store, getPage('registerPage'))
  }
)

export default RegisterPage
