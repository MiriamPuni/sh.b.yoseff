import { Outlet, useNavigate } from 'react-router-dom'
import AdminNav from '../AdminNav'
import styles from './style.module.css'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../../context/UserProvider'

function AdminLayout() {
  const [user] = useContext(UserContext)
  const navigate = useNavigate()
  useEffect(()=>{
    if(!user){
      navigate('/')
    }
  }, [])

  return (
    <div className={styles.container}>
      <AdminNav />
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default AdminLayout