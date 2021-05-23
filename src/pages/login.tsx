import React from 'react'
import { useSelector } from 'react-redux'
import { Login } from '@components'
import wrapper from '@store'
import { getPage } from '@store/actions'

const LoginPage = () => {

  const { page: { loginPage: { back } } } = useSelector((state: any) => state)

  return (
    <Login content={back} />
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getPage('loginPage'))
)

export default LoginPage
