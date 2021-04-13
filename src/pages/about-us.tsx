import React from 'react'
import { useSelector } from 'react-redux'
import wrapper from '@store'
import { getPages } from '@store/actions'

const AboutUs = () => {

  const { page: { aboutPage: { about } } } = useSelector((state: any) => state)
  console.log(about)

  return (
    <div>
      AboutUs
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getPages('aboutPage'))
)

export default AboutUs
