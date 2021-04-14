import React from 'react'
import { useSelector } from 'react-redux'
import { Painter } from '@components'
import wrapper from '@store'
import { getPages } from '@store/actions'

const PaintersPage = () => {
  // const { page: { loginPage: { back } } } = useSelector((state: any) => state)

  return (
    <Painter content={'content'} />
  )
}

// export const getServerSideProps = wrapper.getServerSideProps(
//   ({ store }) => store.dispatch(getPages('paintersPage'))
// )

export default PaintersPage
