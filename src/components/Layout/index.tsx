import { useEffect } from 'react'
import { Navbar, Footer } from '@components'
import { useSelector } from 'react-redux';

const Layout = ({ children }) => {

  const { showFooter } = useSelector((state: any) => state.intermitence)

  useEffect(() => {
    console.log(showFooter)
  }, [showFooter])

  return (
    <>
      <Navbar />
      {children}
      { showFooter && <Footer /> }
    </>
  )
}

export default Layout
