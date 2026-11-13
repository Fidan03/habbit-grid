import Sidebar from '../layouts/sidebar/Sidebar'
import { Outlet } from "react-router"

function Layout() {

  return (
    <div className='layout'>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Layout


<style>
    
</style>