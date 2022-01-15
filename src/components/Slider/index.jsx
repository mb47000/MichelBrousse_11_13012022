import React from 'react'
import styles from './Slider.module.css'

class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentImg: 0,
      moreThanOne: props.pictures.length > 1,
    }
  }

  next = (pictures) => {
    this.state.currentImg === pictures.length - 1
      ? this.setState({ currentImg: 0 })
      : this.setState({ currentImg: this.state.currentImg + 1 })
  }

  back = (pictures) => {
    !this.state.currentImg
      ? this.setState({ currentImg: pictures.length - 1 })
      : this.setState({ currentImg: this.state.currentImg - 1 })
  }

  render() {
    const { pictures } = this.props
    const { moreThanOne } = this.state
    return (
      <div
        className={styles.slider}
        role="region"
        aria-roledescription="carousel"
        aria-label="Photos de l'appartement"
      >
        {moreThanOne && (
          <div
            className={`${styles.slider__controls} ${styles.slider__controls_previous}`}
            onClick={() => this.back(pictures)}
            role="button"
            aria-label="Photo précédante"
          >
            <i className="fas fa-chevron-left"></i>
          </div>
        )}
        <div
          className="slider__img_wrap"
          role="group"
          aria-roledescription="slide"
        >
          <img
            className={styles.slider__img}
            src={pictures[this.state.currentImg]}
            alt="Vue de l'appartement"
            aria-label={`Photo ${this.state.currentImg + 1} sur ${
              pictures.length
            }`}
          ></img>
        </div>

        {moreThanOne && (
          <div
            className={`${styles.slider__controls} ${styles.slider__controls_next}`}
            onClick={() => this.next(pictures)}
            tabIndex="0"
            role="button"
            aria-label="Prochaine photo"
          >
            <i className="fas fa-chevron-right"></i>
          </div>
        )}
      </div>
    )
  }
}

export default Slider
