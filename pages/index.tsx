import { NextPage } from 'next'
import React from 'react'
import Calendar from '../components/mint/Calendar/Calendar'
import MintCard from '../components/mint/MintCard/MintCard'
import style from '../styles/pages/mint.module.css'
import InfoCard from '../components/mint/infoCard/InfoCard'
import { useCallback } from "react";
import Head from 'next/head'

const Home: NextPage = () => {

  return (
    <>
            <Head>
        <title>ASTROGUYS DAPP</title>
        <link rel="icon" href="/favicon.ico" />
       </Head>
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

export default Home
