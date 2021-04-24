import { setFooterShow } from '@store/actions'
import { Color } from '@components'
import wrapper from '@store'
import Head from 'next/head'

function ColorPage() {
  return (
    <>
      <Head>
        <title>Color</title>
      </Head>
      <Color />
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => {
    store.dispatch(setFooterShow(false))
  }
)

export default ColorPage
