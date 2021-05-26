import React from 'react'
import wrapper from '@store'
import { useSelector } from 'react-redux'
import { Inspo } from '@components'
import { getPage } from '@store/actions'
import { mapProps } from '@utils'

const InspoPage = () => {
  const inspo = useSelector((state: any) => state?.page?.inspoPage?.inspo)

  return (
    <Inspo content={inspo} />
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }: any) => {
    await mapProps(store, getPage('inspoPage'))
  }
)

export default InspoPage
