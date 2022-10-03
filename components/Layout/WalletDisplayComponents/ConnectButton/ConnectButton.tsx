import React from 'react'
import style from './ConnectButton.module.css'
import Image from 'next/image'
import logo from '../../../../public/polygon-matic-logo.png'
import {
  useAddress,
  useMetamask,
  useNetwork,
  ChainId,
  useNetworkMismatch,
} from "@thirdweb-dev/react";

const ConnectButton = () => {

  const connectWithMetamask = useMetamask();
  const [, switchNetwork]: any = useNetwork();
  const address = useAddress()
  const isMismatched = useNetworkMismatch();

  const connect = async ()=>{
    await connectWithMetamask()

    if(isMismatched){
      switchNetwork(ChainId.Polygon)
    }
  }

  return (
    <button className={style.btn} onClick={connect}>
        <Image src={logo} width={23} height={23} objectFit='cover' alt='polygon matic logo' />
        { address ?
         isMismatched ? 'SWITCH NETWORK' : 'CONNECTED' 
         : 'CONNECT'}
    </button>
  )
}

export default ConnectButton