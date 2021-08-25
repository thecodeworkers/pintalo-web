import React from 'react'
import wrapper from '@store'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import { ResetPassword } from '@components'
import { getPage } from '@store/actions'
import { mapProps } from '@utils'

const ResetPasswordPage = () => {

  return (
    <>
      <Head>
        <title>Recuperar contraseña</title>
      </Head>
      <ResetPassword />
    </>
  )
}

// export const getServerSideProps = wrapper.getServerSideProps(
//   async ({ store }: any) => {
//     await mapProps(store, getPage('loginPage'))
//   }
// )

export default ResetPasswordPage
