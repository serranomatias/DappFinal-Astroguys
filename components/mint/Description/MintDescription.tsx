import React, { useEffect, useState } from 'react'
import style from './MintDescription.module.css'
import Countdown from '../Countdown/Countdown'
import Image from 'next/image'


const MintDescription = () => {

    return (
        <div className={style.cardContainer}>
            <div>
                <h2>MINT INFO</h2>
                <p>PRICE: 20 MATIC</p>
            </div>
            <div className={style.downSection}>
                <p>First Mint soon!</p>
                <Countdown />
            </div>
        </div>
    )
}

export default MintDescription