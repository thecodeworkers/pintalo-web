import React from 'react'
import { useSelector } from 'react-redux'
import wrapper from '@store'
import { getPages } from '@store/actions'
import { About } from '@components'

const AboutUs = () => {

  const { page: { aboutPage: { about } } } = useSelector((state: any) => state)

  return (
    <About content={about} />
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getPages('aboutPage'))
)

export default AboutUs
