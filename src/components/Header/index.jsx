import React from 'react'
import logo from '../../assets/logo.svg'
import NavBar from '../NavBar'
import styles from './Header.module.css'

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <div>
          <img src={logo} alt="Le logo du site Kasa" />
        </div>
        <NavBar
          links={[
            { path: '/', title: 'Accueil' },
            { path: '/about', title: 'A Propos' },
          ]}
        />
      </header>
    )
  }
}

export default Header
