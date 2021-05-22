import React from 'react'
import wrapper from '@store'
import { useSelector } from 'react-redux'
import { Register } from '@components'
import { getPage } from '@store/actions'
import { END } from '@redux-saga/core'

const RegisterPage = () => {
  const { page: { registerPage: { back } } } = useSelector((state: any) => state)
  return <Register content={back} />
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }: any) => {
    store.dispatch(getPage('registerPage'))
    store.dispatch(END)
    await store.sagaTask.toPromise();
  }
)

export default RegisterPage
