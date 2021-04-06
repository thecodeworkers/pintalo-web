import { Navbar, Footer} from '@components'

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer/>
  </>
)

export default Layout
