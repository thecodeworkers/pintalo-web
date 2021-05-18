import { Navbar, Footer } from '@components'
import { memo } from 'react'
import { useSelector } from 'react-redux'

const Layout = ({ children }) => {
  const { showFooter } = useSelector((state: any) => state.intermitence)

  return (
    <>
      <Navbar />
      {children}
      { showFooter && <Footer /> }
    </>
  )
}

export default memo(Layout)
