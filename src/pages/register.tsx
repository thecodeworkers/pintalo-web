import React from 'react'
import wrapper from '@store'
import { Register } from '@components'
import { getPages } from '@store/actions'
import { useSelector } from 'react-redux'

const RegisterPage = () => {
  const { page: { registerPage: { back } } } = useSelector((state: any) => state)
  return <Register content={back} />
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getPages('registerPage'))
)

export default RegisterPage
