import React from 'react'
import Countdown from '../Countdown/Countdown'
import style from './InfoCard.module.css'
type Props = {}

const InfoCard = (props: Props) => {
  return (
    <div className={style.cardContainer}>
    <div className={style.card}>
        <div className={style.cardTittle}>
            <h2>MINT INFO</h2>
            <p>
            📅 ✦ During the first month of Genesis Drop release, a certain amount of nft will be released per day depending on the week, except for weekends, which will be used to prepare for the next release.<br></br>
⠀⠀⠀⠀⠀💸 ✦ The prices will gradually increase to give a benefit to the dreamers who strongly trust in the project.
            </p>
        </div>
        <div>
            <Countdown/>
        </div>
        <div className={style.downSection}>
            <div className={style.mintedContainer}>
            <p>SUPPLY OCT 4</p>
            <p><b>1 NFT</b></p>
            </div>
            <div className={style.priceContainer}>
            <p>Price</p>
            <p><b>28</b> MATIC</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default InfoCard