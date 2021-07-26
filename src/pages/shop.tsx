import { useSelector } from 'react-redux'
import { getResources } from '@store/actions'
import { mapProps } from '@utils'
import { Shop } from '@components'
import wrapper from '@store'
import Head from 'next/head'

function ShopPage() {
  const { shopPage: { shop } } = useSelector((state: any) => state.page)

  return (
    <>
      <Head>
        <title>Shop</title>
      </Head>
      <Shop content={shop} />
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    await mapProps(store, getResources('shopPage'))
  }
)

export default ShopPage
