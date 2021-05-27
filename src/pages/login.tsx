import React from 'react'
import wrapper from '@store'
import { useSelector } from 'react-redux'
import { Login } from '@components'
import { getPage } from '@store/actions'
import { mapProps } from '@utils'

const LoginPage = () => {
  const back = useSelector((state: any) => state?.page?.loginPage?.back)

  return (
    <Login content={back} />
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }: any) => {
    await mapProps(store, getPage('loginPage'))
  }
)

export default LoginPage
