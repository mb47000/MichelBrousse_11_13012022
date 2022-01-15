import React, { Component } from 'react'
import styles from './Dropdown.module.css'

class Dropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
  }

  toggleDropdown = () => {
    this.setState({ visible: !this.state.visible })
  }

  setContent = (content) =>
    Array.isArray(content) ? (
      <ul>
        {content.map((equipment, index) => (
          <li key={`equipment${index}`}>{equipment}</li>
        ))}
      </ul>
    ) : (
      <p>{content}</p>
    )

  render() {
    const { title, content, addClass = '' } = this.props

    return (
      <div className={styles.dropdown}>
        <div
          className={`${styles.dropdown__toggle} ${styles[addClass]}`}
          onClick={this.toggleDropdown}
        >
          <div>{title}</div>
          <div>
            {this.state.visible ? (
              <i className="fas fa-chevron-up"></i>
            ) : (
              <i className="fas fa-chevron-down"></i>
            )}
          </div>
        </div>
        {this.state.visible && (
          <div className={`${styles.dropdown__content} ${styles[addClass]}`}>
            {this.setContent(content)}
          </div>
        )}
      </div>
    )
  }
}

export default Dropdown
