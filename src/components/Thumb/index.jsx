import React from 'react'
import styles from './Thumb.module.css'

class Thumb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { cover, title } = this.props
    return (
      <div
        className={styles.thumb}
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%),url(${cover})`,
        }}
      >
        <div className={styles.thumb__title}>{title}</div>
      </div>
    )
  }
}

export default Thumb
