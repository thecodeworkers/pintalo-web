import React from 'react'
import { useSelector } from 'react-redux'
import wrapper from '@store'
import { getPage } from '@store/actions'
import { About } from '@components'

const AboutUs = () => {

  const { page: { aboutPage: { about } } } = useSelector((state: any) => state)

  return (
    <About content={about} />
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getPage('aboutPage'))
)

export default AboutUs
