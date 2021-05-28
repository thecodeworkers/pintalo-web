import React from 'react'
import wrapper from '@store'
import { useSelector } from 'react-redux'
import { Painter } from '@components'
import { getPage } from '@store/actions'
import { mapProps } from '@utils'

const PaintersPage = () => {
  const { page: { painterPage: { painters } } } = useSelector((state: any) => state)

  return (
    <Painter content={painters} />
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    await mapProps(store, getPage('painterPage'))
  }
)

export default PaintersPage
