import React from 'react'
import wrapper from '@store'
import { useSelector } from 'react-redux'
import { Inspo } from '@components'
import { getInspoPage } from '@store/actions'
import { mapProps } from '@utils'

const InspoPage = () => {
  const content = useSelector((state: any) => state?.page?.inspoPage)

  return (
    <Inspo content={content} />
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }: any) => {
    await mapProps(store, getInspoPage())
  }
)

export default InspoPage
