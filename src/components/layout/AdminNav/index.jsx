import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

function AdminNav() {
  return (
    <nav className={styles.leftNav}>
      <Link to="/" >
        Home
      </Link>
      <Link to="/about" >
        About
      </Link>
      <Link to="/services" >
        Services
      </Link>
      <Link to="/contact" >
        Contact
      </Link>
    </nav>
  );
}

export default AdminNav;
