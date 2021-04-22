import { setFooterShow } from '@store/actions'
import { Color } from '@components'
import wrapper from '@store'

function ColorPage() {
  return (
    <Color />
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => {
    store.dispatch(setFooterShow(false))
  }
)

export default ColorPage
