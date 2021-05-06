import { setFooterShow, getProduct } from '@store/actions'
import { Color } from '@components'
import wrapper from '@store'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

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
  ({ store, params }) => store.dispatch(getProduct(params.id))
)

export default ColorPage
