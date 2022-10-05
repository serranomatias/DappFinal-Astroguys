import React, { useEffect, useState } from 'react'
import style from './Countdown.module.css'
import countDown from '../../../utils/CountdownTimer'

type DateType = {
    days: string,
    hours: string,
    minutes: string,
    seconds: string,
}

const Countdown = () => {

    const [time, setTime] = useState<DateType>()

    const target = new Date("Oct 5, 2022 21:00:00 UTC").getTime()

    useEffect(() => {

        const interval = setInterval(() => {

            const current: DateType = countDown(target)

            setTime(current);

        }, 1000);

        return () => clearInterval(interval);

    }, [time])

    return (
        <div className={style.counterContainer}>
            {  (time?.days === '0' && time?.hours === '0' && time?.minutes === '0' && time.minutes === '0' && time.seconds === '0') ?
            (<div className={style.mintActive}>MINT IS ACTIVE</div>) :
                (<>
                    <div className={style.box}>
                    <span className={style.counterItem} id='days'> {time?.days}</span>
                    <span className={style.counterDesc}>days</span>
                    </div>
                    <div className={style.box}>
                    <span className={style.counterItem} id='hours'> {time?.hours}</span>
                    <span className={style.counterDesc}>hours</span>
                    </div>
                    <div className={style.box}>
                    <span className={style.counterItem} id='minutes'> {time?.minutes}</span>
                    <span className={style.counterDesc}>minutes</span>
                    </div>
                    <div className={style.box}>
                    <span className={style.counterItem} id='seconds'> {time?.seconds}</span>
                    <span className={style.counterDesc}>seconds</span>
                    </div>
                </>)
            }
        </div>
    )
}

export default Countdown