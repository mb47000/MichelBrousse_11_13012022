import React from 'react'
import styles from './Tag.module.css'

class Tag extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { title } = this.props
    return <div className={styles.tag}>{title}</div>
  }
}

export default Tag
