type DateType = {
  days: string,
  hours: string,
  minutes: string,
  seconds: string,
}

const countDown = (target:number) => {

    const difference = target - Date.now()
  
    let timeLeft:DateType | number = {
      days: '0',
      hours: '0',
      minutes: '0',
      seconds: '0',
    }
  
    if (difference > 0) {

      timeLeft = {
        days:
          Math.floor(difference / (1000 * 60 * 60 * 24)) < 10
            ? `0${Math.floor(difference / (1000 * 60 * 60 * 24))}`
            : `${Math.floor(difference / (1000 * 60 * 60 * 24))}`,
        hours:
          Math.floor((difference / (1000 * 60 * 60)) % 24) < 10
            ? `0${Math.floor((difference / (1000 * 60 * 60)) % 24)}`
            : `${Math.floor((difference / (1000 * 60 * 60)) % 24)}`,
        minutes:
          Math.floor((difference / 1000 / 60) % 60) < 10
            ? `0${Math.floor((difference / 1000 / 60) % 60)}`
            : `${Math.floor((difference / 1000 / 60) % 60)}`,
        seconds:
          Math.floor((difference / 1000) % 60) < 10
            ? `0${Math.floor((difference / 1000) % 60)}`
            : `${Math.floor((difference / 1000) % 60)}`,
      }

    }
  
    return timeLeft
  }
  
  export default countDown