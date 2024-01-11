import { Outlet } from 'react-router-dom';
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'

function Layout() {
  return (
    <>
       <Header />
       <Outlet />   {/* Dynamic PG's rendering: Home, About, etc... */}
       <Footer />           
    </>
  )
}

export default Layout;