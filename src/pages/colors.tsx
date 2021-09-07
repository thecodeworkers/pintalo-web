import Head from 'next/head'
import { Colors } from '@components'
import { mapProps } from '@utils'
import { getColorsPage } from '@store/actions'
import wrapper from '@store'

function ColorsPage() {
  return (
    <>
      <Head>
        <title>Colors</title>
      </Head>
      <Colors />
    </>
  )
}
export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    await mapProps(store, getColorsPage())
  }
)

export default ColorsPage
