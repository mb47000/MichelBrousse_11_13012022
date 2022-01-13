import React, { Component } from 'react'
import fetchHousings from '../../utils/fetch'

export class HousingSheet extends Component {
  componentDidMount() {
    console.log(fetchHousings.all())
  }

  render() {
    return <div>HousingSheet</div>
  }
}

export default HousingSheet
