import { memo } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Toast from '../Toast'

const Layout = ({ children }) => {
  const { showFooter } = useSelector((state: any) => state.intermitence)

  return (
    <>
      <Navbar />
      {children}
      { showFooter && <Footer /> }
      <Toast />
    </>
  )
}

export default memo(Layout)
