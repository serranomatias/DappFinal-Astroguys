import React from 'react'
import style from './Calendar.module.css'

type daysType = [ day: number, month: string ][]

const Calendar = () => {

const days: daysType = [ 
  [ 3, 'Mon' ],
  [ 4, 'Tue' ],
  [ 5, 'Wed' ],
  [ 6, 'Thu' ],
  [ 7, 'Fri' ],
  [ 8, 'Sun' ],
 ]


  return (

    <div className={style.calendarContainer}>

      {
        days.map((item, index)=>(

          <div className={style.calendarItem} key={index}>

          <p className={style.number}> { item[0] } </p>
          <p className={style.day}> { item[1] } </p>

          </div>
        ))
      }

    </div> 
  )
}

export default Calendar