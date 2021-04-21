import { setFooterShow } from '@store/actions'
import { ColorBackground } from '@components'
import wrapper from '@store'

function Color() {
  return (
    <div style={{ height: '100vh', display: 'flex' }}>
      <div style={{ width: '50%' }}>
        <ColorBackground color="#3772ff" />
      </div>
      <div style={{ width: '50%' }}>

      </div>
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => {
    store.dispatch(setFooterShow(false))
  }
)

export default Color
