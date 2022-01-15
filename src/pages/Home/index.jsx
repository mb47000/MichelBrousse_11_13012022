import React, { Component } from 'react'
import fetchHousings from '../../utils/fetch'
import { Link } from 'react-router-dom'
import Thumb from '../../components/Thumb'
import styles from './Home.module.css'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      housings: [],
    }
  }

  componentDidMount() {
    const housings = fetchHousings.all()
    this.setState({ housings })
  }

  render() {
    const { housings } = this.state

    return (
      <main className="layout">
        <div className={styles.home}>
          <div className={styles.homeTitle__wrap}>
            <h1 className={styles.homeTitle}>Chez vous, partout et ailleurs</h1>
          </div>
          <div className={styles.rentalsGrid}>
            {housings.map((housing) => (
              <Link to={`/housing-sheet/${housing.id}`} key={housing.id}>
                <Thumb cover={housing.cover} title={housing.title} />
              </Link>
            ))}
          </div>
        </div>
      </main>
    )
  }
}

export default Home
