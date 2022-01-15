import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { links } = this.props

    return (
      <nav>
        <ul className={styles.nav__list}>
          {links.map((link) => (
            <li className={styles.nav__list_item} key={link.title}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.nav__link} ${styles.nav__link_active}`
                    : styles.nav__link
                }
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}

export default NavBar
