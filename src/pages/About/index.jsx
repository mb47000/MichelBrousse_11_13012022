import React, { Component } from 'react'
import Dropdown from '../../components/Dropdown'
import styles from './About.module.css'

class About extends Component {
  render() {
    return (
      <main className="layout">
        <div className={styles.about}>
          <div className={styles.about_title__wrap}></div>
          <div className={styles.dropdown_wraper}>
            <Dropdown
              addClass={'s_about'}
              title="Fiabilité"
              content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
            ></Dropdown>

            <Dropdown
              addClass={'s_about'}
              title="Respect"
              content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            ></Dropdown>

            <Dropdown
              addClass={'s_about'}
              title="Service"
              content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
            ></Dropdown>

            <Dropdown
              addClass={'s_about'}
              title="Sécurité"
              content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            ></Dropdown>
          </div>
        </div>
      </main>
    )
  }
}

export default About
