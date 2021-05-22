import React from 'react'
import wrapper from '@store'
import { useSelector } from 'react-redux'
import { getPages, getHomePage } from '@store/actions'
import { END } from '@redux-saga/core'
import { Home } from '@components'

const HomePage = () => {
  const { page: { homePage } } = useSelector((state: any) => state)

  return (
    <div style={{ height: '100vh', backgroundImage: `url(${homePage.img})` }}>

    </div>
  )
  // return <Home content={homePage} />
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }: any) => {
    store.dispatch(getHomePage())
    store.dispatch(END);
    await store.sagaTask.toPromise();
  }
)

export default HomePage
