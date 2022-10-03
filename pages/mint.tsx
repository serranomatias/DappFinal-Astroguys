import { NextPage } from 'next'
import React from 'react'
import Calendar from '../components/mint/Calendar/Calendar'
import MintCard from '../components/mint/MintCard/MintCard'
import style from '../styles/pages/mint.module.css'
import InfoCard from '../components/mint/infoCard/InfoCard'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import Particle from '../components/mint/Particle/Particle'


const mint: NextPage = () => {

  return (
    <>
      <div className={style.wrapperContainer}>
        <div className={style.cardsContainer}>
          <MintCard />
          <InfoCard />
        </div>
        <Calendar />
      </div>
    </>
  )
}

export default mint