import { Navbar } from '@components'

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <div>footer</div>
  </>
)

export default Layout
