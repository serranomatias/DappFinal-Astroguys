import React from 'react'
import Navbar from './Navbar'
import style from './LayoutStyles/Layout.module.css'
import Footer from './Footer';
import WalletDisplay from './WalletDisplay';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      <div className={style.container}>
        <WalletDisplay />
        <div className={style.children}>
          {children}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout