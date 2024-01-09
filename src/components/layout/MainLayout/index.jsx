import { Outlet } from 'react-router-dom'
import MainNav from '../MainNav'

function MainLayout() {
  return (
    < >
        <MainNav />
        <Outlet/>
    </>
  )
}

export default MainLayout