import { setFooterShow, getProduct } from '@store/actions'
import { Color } from '@components'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { mapProps } from '@utils'
import wrapper from '@store'
import Head from 'next/head'

function ColorPage() {
  const { detail } = useSelector((state: any) => state.product)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setFooterShow(false))
  }, [])

  return (
    <>
      <Head>
        <title>Color</title>
      </Head>
      <Color detail={detail} />
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, params }: any) => {
    await mapProps(store, getProduct(params.id))
  }
)

export default ColorPage
