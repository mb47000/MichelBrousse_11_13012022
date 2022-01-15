import fetchHousings from '../../utils/fetch'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Error from '../Error'
import Slider from '../../components/Slider'
import Dropdown from '../../components/Dropdown'
import Tag from '../../components/Tag'
import RatingStars from '../../components/RatingStars'
import styles from './HousingSheet.module.css'

const HousingSheet = () => {
  const { id } = useParams()
  const [houseId] = useState(id)
  const [houseData, setHouseData] = useState(null)

  useEffect(() => {
    const fetchHouseData = async () => {
      const data = await fetchHousings.one(houseId)
      setHouseData(data)
    }
    fetchHouseData()
  }, [])

  return houseData ? (
    <main className={styles.layout}>
      <div className={styles.rental}>
        <Slider pictures={houseData.pictures} />
        <div className={styles.rental__basic_info}>
          <div className={styles.rental_title}>{houseData.title}</div>
          <div className={styles.rental__location}>{houseData.location}</div>
        </div>
        <div className={styles.rental__host_info}>
          <div className={styles.rental__host_name}>
            <div>{houseData.host.name.split(' ')[0]}</div>
            <div>{houseData.host.name.split(' ')[1]}</div>
          </div>
          <img
            className={styles.rental__host_picture}
            src={houseData.host.picture}
            alt="host"
          ></img>
        </div>

        <div className={styles.rental__tags}>
          {houseData.tags.map((tag, index) => (
            <Tag title={tag} key={`${tag}-${index}`} />
          ))}
        </div>
        <div className={styles.rental__rating}>
          <RatingStars rating={houseData.rating} />
        </div>
        <div className={styles.rental__dropdowns}>
          <div className={styles.rental__description}>
            <Dropdown
              title="Description"
              content={houseData.description}
              addClass={'m_font'}
            />
          </div>
          <div className={styles.rental__equipments}>
            <Dropdown
              title="Equipements"
              content={houseData.equipments}
              addClass={'m_font'}
            />
          </div>
        </div>
      </div>
    </main>
  ) : (
    <Error></Error>
  )
}

export default HousingSheet
