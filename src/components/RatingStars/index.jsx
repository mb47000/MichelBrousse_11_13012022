import React, { Component } from 'react'
import styles from './RatingStars.module.css'

class RatingStars extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stars: props.rating,
    }
  }

  getRating = (rating) => {
    let ratingArray = []
    for (let i = 0; i < rating; i++) {
      ratingArray.push(true)
    }
    for (let i = rating; i < 5; i++) {
      ratingArray.push(false)
    }
    return ratingArray
  }
  render() {
    return (
      <div className="rating">
        {this.getRating(this.state.stars).map((rating, index) => (
          <i
            className={`fas fa-star ${
              rating ? styles.rating__star : styles.rating__star_blank
            }`}
            key={`rating-${index}`}
          ></i>
        ))}
      </div>
    )
  }
}

export default RatingStars
