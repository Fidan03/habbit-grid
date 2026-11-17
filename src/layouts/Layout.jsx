import Sidebar from '../layouts/sidebar/index'
import { Outlet } from "react-router"

function Layout() {

  return (
    <div className='layout'>
      <Sidebar/>
      <Outlet/>

    <style>
        {`
          .layout{
            display: flex;
            background-color: #f4f4f4;
            width: 100%;
            
          }
        `}
    </style>
    </div>
  )
}

export default Layout


