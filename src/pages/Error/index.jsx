import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Error.module.css'

class Error extends React.Component {
  render() {
    return (
      <main className="layout">
        <div className={styles.error}>
          <h1 className={styles.error__title}>404</h1>
          <p className={styles.error__message}>
            Oups! La page que vous demandez n'existe pas.
          </p>
          <Link to="/" className={styles.error__link}>
            Retourner sur la page d’accueil
          </Link>
        </div>
      </main>
    )
  }
}

export default Error
