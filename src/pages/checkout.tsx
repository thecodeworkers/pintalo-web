import Head from 'next/head'
import { Checkout } from '@components'

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

export default CheckoutPage
