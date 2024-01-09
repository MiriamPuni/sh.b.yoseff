import React, { useContext} from 'react';
import styles from './style.module.css';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../context/UserProvider';

function MainNav() {
   const [user, setUser] = useContext(UserContext)
   const className = ({ isActive }) => isActive ? styles.active : ''
   return (
      <header className={styles.header}>
         <h1>Lion Store</h1>
         <nav>
            <ul className={styles.nav}>
               <li className={styles.navItem}>
                  <NavLink to="/" className={className}>
                     Home
                  </NavLink>
               </li>
               {(user)
                  ?
                  <li className={styles.navItem}>
                     <NavLink to="/admin" className={className}>
                        Admin
                     </NavLink>
                  </li>
                  :
                  null
               }
               {(user)
                  ?
                  <li className={styles.navItem}>
                  <NavLink to="/login" className={className} onClick={()=> {setUser(); localStorage.removeItem('user')}}>
                     Logout
                  </NavLink>
               </li>
                  :
                  <li className={styles.navItem}>
                     <NavLink to="/login" className={className}>
                        Login
                     </NavLink>
                  </li>
               }

            </ul>
         </nav>
      </header>
   );
}

export default MainNav;
