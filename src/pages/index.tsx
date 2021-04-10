import React from 'react'
import { useSelector } from 'react-redux'
import { Home } from '@components'
import wrapper from '@store'
import { getPages } from '@store/actions'

const HomePage = () => {
  const { page: { homePage: { home } } } = useSelector((state: any) => state)
  console.log(home);

  return <Home content={home} />
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getPages('homePage'))
)


export default HomePage
