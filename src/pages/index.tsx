import React from 'react'
import { useSelector } from 'react-redux'
import { Home } from '@components'

const HomePage = () => {
  const { page: { homePage: { home } } } = useSelector((state: any) => state)
  console.log(home);

  return <Home content={home} />
}



export default HomePage
