import React, { Component } from 'react'
import logo from '../../assets/logo-footer.svg'
import styles from './Footer.module.css'

export class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <div>
          <img src={logo} alt="Le logo du site Kasa" />
        </div>
        <div className={styles.footer__brand}>
          © 2020 Kasa. All rights reserved
        </div>
      </footer>
    )
  }
}

export default Footer
