import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import style from './LayoutStyles/Navbar.module.css'
import logo from '../../public/astroguys-logo.jpg'
import { useRouter } from 'next/router'

const Navbar = () => {

  return (
    <div className={style.container} >

      <div className={style.routeContainer}>

        <div className={style.iconContainer}>
          <div className={style.iconLogo} style={{backgroundColor:'#fff', marginBottom:'100px'}} >
            <Image src={logo} width={70} height={70} objectFit='cover' alt='astroguys logo' />
          </div>
        </div>

        <div  className={style.iconContainer}>
            <div className={style.iconCurrent}>
              <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 0 24 24" width="35">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"/>
              </svg>
            </div>
        </div>

        <div className={style.iconContainer}>
            <div className={style.icon }>
              <p className={style.soon}>Soon</p>
            </div>
        </div>

        <div className={style.iconContainer}>
            <div className={style.icon }>
            <p className={style.soon}>Soon</p>
            </div>
        </div>

      </div>

    </div>
  )
}

export default Navbar