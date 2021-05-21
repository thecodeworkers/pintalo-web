import React from 'react'
import wrapper from '@store'
import { useSelector } from 'react-redux'
import { getResources } from '@store/actions'
import { END } from '@redux-saga/core'
import { Home } from '@components'

const HomePage = () => {
  const { page: { homePage: { home } } } = useSelector((state: any) => state)
  return <Home content={home} />
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }: any) => {
    store.dispatch(getResources())
    store.dispatch(END);
    await store.sagaTask.toPromise();
  }
)

export default HomePage
