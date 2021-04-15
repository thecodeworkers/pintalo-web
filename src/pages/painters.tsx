import React from 'react'
import { useSelector } from 'react-redux'
import { Painter } from '@components'
import wrapper from '@store'
import { getPages } from '@store/actions'

const PaintersPage = () => {

  const { page: { painterPage: { painters } } } = useSelector((state: any) => state)

  return (
    <Painter content={painters} />
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getPages('painterPage'))
)

export default PaintersPage
