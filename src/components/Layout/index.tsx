import { Navbar, Footer } from '@components'
import { useSelector } from 'react-redux';

const Layout = ({ children }) => {

  const { showFooter } = useSelector((state: any) => state.intermitence)

  return (
    <>
      <Navbar />
      {children}
      { showFooter && <Footer />}
    </>
  )
}

export default Layout
