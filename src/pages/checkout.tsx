import Head from 'next/head'
import { Checkout } from '@components'
import { mapProps } from '@utils'
import { getCheckoutData } from '@store/actions'
import wrapper from '@store'

function CheckoutPage() {
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <Checkout />
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }: any) => {
    await mapProps(store, getCheckoutData())
  }
)

export default CheckoutPage
